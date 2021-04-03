import { createContext } from "react"
import { Manager } from "../wasm/pkg/weresocool_wasm"

export interface Store {
  editor: "text" | "vim" | "emacs"
  volume: number
  manager: Manager
}

export const intialStore = (manager: Manager): Store => {
  return {
    editor: "vim",
    volume: 80,
    manager,
  }
}

export const GlobalContext = createContext((undefined as unknown) as Store)
