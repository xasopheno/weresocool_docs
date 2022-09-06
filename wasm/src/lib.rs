use cpal::traits::{DeviceTrait, HostTrait, StreamTrait};
use cpal::Stream;
use cpal::{BufferSize, StreamConfig};
use std::sync::{Arc, Mutex};
use wasm_bindgen::prelude::*;
use web_sys::console;
use weresocool::{
    error::Error,
    generation::parsed_to_render::{RenderReturn, RenderType},
    instrument::renderable::{nf_to_vec_renderable, renderables_to_render_voices},
    instrument::StereoWaveform,
    interpretable::{InputType::Language, Interpretable},
    manager::RenderManager,
};

const BUFFER_SIZE: usize = 1024 * 8;
const SAMPLE_RATE: usize = 44100;

#[wasm_bindgen]
pub struct Manager {
    render_manager: Arc<Mutex<RenderManager>>,
    stream: Option<Stream>,
}

#[wasm_bindgen]
impl Manager {
    fn setup(&mut self) -> Result<(), Error> {
        let stream = setup_audio(self.render_manager.clone())?;
        let play_result = stream.play();
        if play_result.is_err() {
            return Err(Error::with_msg("Error initializing wasm audio").into());
        };
        self.stream = Some(stream);
        Ok(())
    }

    pub fn push(&mut self, language: String) -> Result<(), JsValue> {
        if self.stream.is_none() {
            self.setup()?
        };
        let (nf, basis, mut table) =
            match Language(&language).make(RenderType::NfBasisAndTable, None)? {
                RenderReturn::NfBasisAndTable(nf, basis, table) => (nf, basis, table),
                _ => panic!("Error. Unable to generate NormalForm"),
            };
        let renderables = nf_to_vec_renderable(&nf, &mut table, &basis)?;
        let render_voices = renderables_to_render_voices(renderables);
        self.render_manager
            .lock()
            .unwrap()
            .push_render(render_voices);
        Ok(())
    }

    pub fn update_volume(&mut self, value: f32) {
        self.render_manager.lock().unwrap().update_volume(value)
    }
}

pub fn setup_audio(render_manager: Arc<Mutex<RenderManager>>) -> Result<Stream, Error> {
    let host = cpal::default_host();
    let device = host
        .default_output_device()
        .expect("failed to find a default output device");

    let config = StreamConfig {
        channels: 2,
        buffer_size: BufferSize::Fixed(BUFFER_SIZE as u32),
        sample_rate: cpal::SampleRate(SAMPLE_RATE as u32),
    };
    let err_fn = |err| console::error_1(&format!("an error occurred on stream: {}", err).into());

    let stream = device
        .build_output_stream(
            &config,
            move |data: &mut [f32], _| write_data(data, &mut &render_manager.clone()),
            err_fn,
        )
        .unwrap();
    Ok(stream)
}

fn write_data(output: &mut [f32], render_manager: &Arc<Mutex<RenderManager>>) {
    let batch: Option<(StereoWaveform, Vec<f32>)> =
        render_manager.lock().unwrap().read(BUFFER_SIZE);

    if let Some((b, ramp)) = batch {
        let mut idx = 0;
        for frame in output.chunks_mut(2) {
            frame[0] = ramp[idx] * b.l_buffer[idx] as f32;
            frame[1] = ramp[idx] * b.r_buffer[idx] as f32;
            idx += 1;
        }
    } else {
        for frame in output.chunks_mut(2) {
            frame[0] = 0.0;
            frame[1] = 0.0;
        }
    }
}

#[wasm_bindgen]
pub fn beep() -> Manager {
    Manager {
        render_manager: Arc::new(Mutex::new(RenderManager::init_silent())),
        stream: None,
    }
}

#[wasm_bindgen(start)]
pub fn main_js() -> Result<(), JsValue> {
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();

    Ok(())
}
