import React from "react"
import { Embed } from "theme-ui"

export const Youtube: React.FC<{ code: string }> = ({ code }) => (
  <Embed src={`https://www.youtube.com/embed/${code}`} />
)

export const Vimeo: React.FC<{ code: string }> = ({ code }) => (
  <Embed src={`https://player.vimeo.com/video/${code}`} />
)
