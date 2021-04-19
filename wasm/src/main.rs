use std::f64::consts::PI;
use wasm_bindgen::prelude::*;

const TAU: f64 = PI * 2.0;
const FACTOR: f64 = TAU / 44100.0;
const BUFFER_SIZE: usize = 8;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub struct Buffer {
    arr: Vec<f64>,
    phase: f64,
}

#[wasm_bindgen]
impl Buffer {
    pub fn new() -> Self {
        let arr = (0..BUFFER_SIZE).map(|_| 0.0).collect();
        Self { arr, phase: 0.0 }
    }

    pub fn calc_sample(&mut self) -> f64 {
        self.phase = self.calculate_current_phase();
        self.phase.sin()
    }

    pub fn calculate_current_phase(&self) -> f64 {
        (FACTOR.mul_add(220.0, self.phase)) % TAU
    }

    pub fn process(&mut self) -> String {
        let result = (0..BUFFER_SIZE)
            .map(|_| self.calc_sample().to_string())
            .collect::<Vec<String>>()
            .join(", ");
        result
    }

    pub fn get_buffer(&mut self) -> String {
        self.process()
    }
}

fn main() {
    let mut buffer = Buffer::new();
    let result = buffer.process();
    dbg!(result);
    let result = buffer.process();
    dbg!(result);
}
