import React from "react";
import { useWasm, WASM_READY_STATE } from "../utils/useWasm";
import { WereSoCool } from "../components/WereSoCool";
const language = `{ f: 440, l: 1, g: 1/10, p: 0 }\n
overtones = {
  O[
    (1, 1, 1, -1),
    (1, 0, 1, 1),
  ]
}\n
main = {
  overtones 
  | Seq [
    Fm 5/3, Fm 7/6, Fm 1
  ]
}`;

const Stuff = (): React.ReactElement => {
  return <WereSoCool language={language} />;
};

const App = () => {
  const [WasmProvider, wasmObject] = useWasm();

  return (
    <WasmProvider value={wasmObject}>
      <div id="App">
        {wasmObject.readyState === WASM_READY_STATE.READY && <Stuff />}
      </div>
    </WasmProvider>
  );
};

export default App;
