import React from "react"
import { Embed } from "theme-ui"

const Youtube: React.FC<{ code: string }> = ({ code }) => (
  <Embed src={`https://www.youtube.com/embed/${code}`} />
)

export default Youtube
