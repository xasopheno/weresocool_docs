import React from "react"
import { createContext } from "react"

export type Action =
  | { _k: "Update_Volume"; volume: number }
  | { _k: "Increment_Editor_Type"; editor: number }

export class Dispatch {
  constructor(public dispatch: React.Dispatch<Action>) {}

  onIncrementEditorType(current_editor: number): void {
    const editor = (current_editor + 1) % 3
    localStorage.setItem("editor", editor.toString())
    this.dispatch({
      _k: "Increment_Editor_Type",
      editor,
    })
  }

  async onVolumeChange(volume: number): Promise<void> {
    try {
      await axios.post(settings.volumeURL, {
        volume: volume / 100,
      })
      localStorage.setItem("volume", volume.toString())
      this.dispatch({ _k: "Update_Volume", volume })
    } catch (e) {
      this.dispatch({ _k: "Backend", fetch: { state: "bad", error: e } })
    }
  }
}

export const DispatchContext = createContext((undefined as unknown) as Dispatch)
