import React, { useContext } from "react"
import { DispatchContext } from "../../state/actions"
import { GlobalContext } from "../../state/store"
import { useLoadedWasm } from "../../utils/useWasm"
import { Slider, SliderContainer, VolumeText } from "./atoms"

export const VolumeBar = () => {
  const store = useContext(GlobalContext)
  const dispatch = useContext(DispatchContext)
  const { manager } = useLoadedWasm()
  return (
    <SliderContainer>
      <Slider
        active={store.volume > 0.0}
        type="range"
        min="0"
        max="100"
        id="volumeSlider"
        value={store.volume}
        onChange={(e) => {
          dispatch.onVolumeChange(parseInt(e.target.value), manager)
        }}
      />
      <VolumeText id={"volumeText"} active={store.volume > 0.0}>
        {store.volume}
      </VolumeText>
    </SliderContainer>
  )
}
