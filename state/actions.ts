import React from "react"
import { createContext } from "react"
import { Manager } from "../wasm/pkg/weresocool_wasm"

export type Action =
  | { _k: "Update_Volume"; volume: number }
  | { _k: "Update_Editor_Type"; editor: "text" | "vim" | "emacs" }

export class Dispatch {
  constructor(public dispatch: React.Dispatch<Action>) {}

  onIncrementEditorType(editor: "text" | "vim" | "emacs"): void {
    localStorage.setItem("editor", editor)
    this.dispatch({
      _k: "Update_Editor_Type",
      editor,
    })
  }

  async onVolumeChange(volume: number, manager: Manager | null): Promise<void> {
    manager!.update_volume(volume / 100)
    localStorage.setItem("volume", volume.toString())
    this.dispatch({ _k: "Update_Volume", volume })
  }
}

export const DispatchContext = createContext((undefined as unknown) as Dispatch)
