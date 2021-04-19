import React from "react"
import { createContext, useState, useContext, useEffect } from "react"
import { Manager } from "../../wasm/pkg/weresocool_wasm"

type Result = {
  manager: Manager | null
  readyState: number
}
export const WASM_READY_STATE = {
  ERROR: -2,
  NOT_READY: 0,
  READY: 1,
}

export const WasmContext = createContext<Result>({
  manager: null,
  readyState: WASM_READY_STATE.NOT_READY,
})

export const useWasm = (): [React.Provider<Result>, Result] => {
  const [wasmObject, setWasmObject] = useState<Result>({
    manager: null,
    readyState: WASM_READY_STATE.NOT_READY,
  })

  useEffect(() => {
    const loadWasm = async () => {
      try {
        const wasm = await import("../../wasm/pkg/weresocool_wasm.js")
        const manager = wasm.beep()
        setWasmObject({
          manager,
          readyState: WASM_READY_STATE.READY,
        })

        manager.update_volume(0.7)
      } catch (e) {
        console.error(e)
        setWasmObject({ manager: null, readyState: WASM_READY_STATE.ERROR })
      }
    }

    loadWasm()
  }, [])

  return [WasmContext.Provider, wasmObject]
}

export const useLoadedWasm = () => {
  const { manager, readyState } = useContext(WasmContext)

  return { manager, readyState }
}
