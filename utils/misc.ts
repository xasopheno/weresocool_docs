import { useLoadedWasm } from "./useWasm"

export const capitalize = (s: string): string => {
  return s
    .split("_")
    .map((word, i) => {
      if (i > 0 && ["and", "or", "of"].includes(word)) {
        return word
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
    })
    .join(" ")
}

export const isMobile = () =>
  window.matchMedia("only screen and (max-width: 760px)").matches

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const stopLang = `{ f: 220, l: 1, g: 1, p: 0 }\nmain = {Fm 0}`

export function useStopAndWait() {
  const { manager, readyState } = useLoadedWasm()
  const stopAndWait = async () => {
    if (manager && readyState === 1) {
      manager.push(stopLang)
      await sleep(150)
    }
  }
  return stopAndWait
}
