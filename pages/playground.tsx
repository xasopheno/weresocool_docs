import React from 'react';
import { useLoadedWasm, WASM_READY_STATE } from '../utils/useWasm';
import { WSCWithRatioChart } from '../components/WSC_with_RatioChart';

const language = `{ f: 311.127, l: 1, g: 1, p: 0 }

thing1 = {
  O[
    (1/1, 2, 1, 1),
    (1/1, 0, 1, -1),
  ]
  | Seq [
    Fm 1, Fm 9/8, Fm 5/4
  ]
}

thing2 = {
  O[
    (1/1, 2, 1, 1),
    (1/1, 0, 1, -1),
  ]
  | Seq [
    Fm 3/4
  ]
  | FitLength thing1
}

main = {
  Overlay [
    thing1,
    thing2
  ]
}
`;
const Stuff = (): React.ReactElement => {
  return <WSCWithRatioChart language={language} />;
};

const App = () => {
  const { readyState } = useLoadedWasm();

  return (
    <div>
      <div
        style={{
          paddingTop: '3em',
          maxWidth: '90vw',
          margin: 'auto',
        }}
      >
        {readyState === WASM_READY_STATE.READY && <Stuff />}
      </div>
    </div>
  );
};

export default App;
