import React from "react"
import { createContext } from "react"
import { Manager } from "../wasm/pkg/weresocool_wasm"

export type Action =
  | { _k: "Update_Volume"; volume: number }
  | { _k: "Update_Editor_Type"; editor: "text" | "vim" | "emacs" }

export class Dispatch {
  constructor(public dispatch: React.Dispatch<Action>) {}

  onChangeEditorType(editor: "text" | "vim" | "emacs"): void {
    localStorage.setItem("editor", editor)
    this.dispatch({
      _k: "Update_Editor_Type",
      editor,
    })
  }

  onVolumeChange(volume: number, manager: Manager | null): void {
    this.dispatch({ _k: "Update_Volume", volume })
    manager!.update_volume(volume / 100)
  }
}

export const DispatchContext = createContext((undefined as unknown) as Dispatch)
