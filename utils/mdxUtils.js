import fs from "fs"
import path from "path"

export const TUTORIAL_PATH = path.join(process.cwd(), "tutorials")
export const INTERVIEWS_PATH = path.join(process.cwd(), "interviews")
export const DANNY_PATH = path.join(process.cwd(), "danny")
export const TV_PATH = path.join(process.cwd(), "concert_artists")

export const tutorialFilePaths = fs
  .readdirSync(TUTORIAL_PATH)
  .filter((path) => /\.mdx?$/.test(path))

export const interviewFilePaths = fs
  .readdirSync(INTERVIEWS_PATH)
  .filter((path) => /\.mdx?$/.test(path))

export const dannyFilePaths = fs
  .readdirSync(DANNY_PATH)
  .filter((path) => /\.mdx?$/.test(path))

export const tvFilePaths = fs
  .readdirSync(TV_PATH)
  .filter((path) => /\.json/.test(path))
