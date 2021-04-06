import fs from "fs"
import path from "path"

export const TUTORIAL_PATH = path.join(process.cwd(), "tutorials")
export const INTERVIEWS_PATH = path.join(process.cwd(), "interviews")
export const GIGS_PATH = path.join(process.cwd(), "gigs")

export const tutorialFilePaths = fs
  .readdirSync(TUTORIAL_PATH)
  .filter((path) => /\.mdx?$/.test(path))

export const interviewFilePaths = fs
  .readdirSync(INTERVIEWS_PATH)
  .filter((path) => /\.mdx?$/.test(path))

export const gigsFilePaths = fs
  .readdirSync(GIGS_PATH)
  .filter((path) => /\.mdx?$/.test(path))
