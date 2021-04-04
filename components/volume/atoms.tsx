import styled from "styled-components"

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 5px;
  width: 150px;
  align-self: flex-end;
  margin-left: auto;
  margin-right: 20px;
`

export const VolumeText = styled.p<SliderProps>`
  margin: 0;
  padding-left: 10px;
  min-width: 30px;
  padding-top: 2px;
  color: ${(p: SliderProps) => (p.active ? "goldenrod" : "#aaa")};
  opacity: 0.8;
`

export interface SliderProps {
  active: boolean
}

export const Slider = styled.input<SliderProps>`
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  opacity: 0.7;
  -webkit-transition: 0.1s;
  transition: opacity 0.1s;

  :focus {
    outline: none;
    opacity: 1;
  }

  ::-webkit-slider-runnable-track {
    height: 1.3rem;
    margin: 0;
    width: 100%;
    cursor: pointer;
    background: linear-gradient(
      to bottom right,
      transparent 50%,
      ${(p: SliderProps) => (p.active ? "goldenrod" : "#aaa")} 50%
    );
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 1.7rem;
    width: 0.5rem;
    background: #edd;
    border: 1px solid;
    margin-top: -5px;
    border-radius: 3px;
    border-color: #eed;
    cursor: pointer;
  }
`
