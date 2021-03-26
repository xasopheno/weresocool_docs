import React from "react";
import { useWasm, WASM_READY_STATE } from "../utils/useWasm";
import { WSCWithRatioChart } from "../components/WSC_with_RatioChart";

const Stuff = (): React.ReactElement => {
  return <WSCWithRatioChart />;
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
