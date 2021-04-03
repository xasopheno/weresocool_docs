import { Store } from "./store"
import { Action } from "./actions"

function exhaustive(_param: never) {}

export const mainReducer: React.Reducer<Store, Action> = (
  state,
  action
): Store => {
  switch (action._k) {
    case "Update_Volume":
      return { ...state, volume: action.volume }
    case "Increment_Editor_Type":
      return { ...state, editor: action.editor }
    default: {
      exhaustive(action)
    }
  }

  throw new Error("Impossible")
}
