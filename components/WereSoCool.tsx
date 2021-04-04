import React, { useEffect } from "react"
import { useLoadedWasm } from "../utils/useWasm"
import { EditorProps } from "./AceEditor"
import dynamic from "next/dynamic"
const AceEditor = dynamic<EditorProps>(
  () => import("./AceEditor").then((mod) => mod.Editor),
  {
    ssr: false,
  }
)

export const WereSoCool = (
  props: Omit<EditorProps, "onRender">
): React.ReactElement => {
  const { manager, readyState } = useLoadedWasm()

  if (manager && readyState === 1) {
    const render = (language: string) => {
      manager.push(language)
    }
    return <AceEditor onRender={render} {...props} />
  } else {
    return <p>loading...</p>
  }
}
