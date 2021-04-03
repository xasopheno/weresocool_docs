import { createContext } from "react"

interface Editor {
  [index: number]: { name: string; style: string }
}

export type Fetch =
  | { state: "loading" }
  | { state: "good" }
  | { state: "bad"; error: Error; unauthorized?: true }

export const Editors: Editor = {
  0: { name: "Text", style: "" },
  1: { name: "Vim", style: "vim" },
  2: { name: "Emacs", style: "emacs" },
}

export interface Store {
  editor: number
  volume: number
}

export const intialStore: Store = {
  editor: 0,
  volume: 80,
}

export const testStore: Store = {
  editor: 0,
  volume: 80,
}
export const GlobalContext = createContext((undefined as unknown) as Store)
