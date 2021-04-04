import { createContext } from "react"

export interface Store {
  editor: "text" | "vim" | "emacs"
  volume: number
}

export const intialStore: Store = {
  editor: "vim",
  volume: 70,
}

export const GlobalContext = createContext((undefined as unknown) as Store)
