import React, { useState } from "react"
import { Burger } from "../../menu"
import { MenuItem, StyledMenu } from "./Menu.styled"
import { capitalize, useStopAndWait } from "../../../utils/misc"
import { useRouter } from "next/router"
import { MobileStyledMenu } from "./MobileMenu.styled"
import { useWindowSize } from "../../../utils/useWindowSize"

const Menu = ({ children, ...props }: React.HTMLAttributes<Element>) => {
  const [open, setOpen] = useState(false)
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1

  const tutorials = [
    "welcome",
    "overtones",
    "overlay",
    "point_operations",
    "pipe_operations",
    "pipe_and_sequence",
    "small_differences",
    "o_operation",
    "fit_length",
    "modulate_by",
    "functions",
    "intro_to_lists",
    "equal_temperament",
    "indices",
    "generators",
    "expressive_generators",
    "cool_coefficients",
  ]
  const router = useRouter()
  const post = router.asPath.split("/").slice(-1)[0]
  const stopAndWait = useStopAndWait()

  const windowSize = useWindowSize()
  const SizedMenu = windowSize.width! < 1000 ? MobileStyledMenu : StyledMenu

  return (
    <div>
      {windowSize.width! < 1000 && <Burger open={open} setOpen={setOpen} />}
      <SizedMenu {...props}>
        <h1 style={{ marginTop: "5rem" }}>Documentation</h1>
        <MenuItem
          onClick={async () => {
            await stopAndWait()
            router.push(`/posts/documentation`)
            setOpen(false)
          }}
          tabIndex={tabIndex}
        >
          {`${post === "documentation" ? ">" : " "} WereSoCool Docs`}
        </MenuItem>
        <h1>Tutorials</h1>
        {tutorials.map((tutorial, idx) => {
          return (
            <MenuItem
              key={idx}
              onClick={async () => {
                await stopAndWait()
                router.push(`/posts/${tutorial}`)
                setOpen(false)
              }}
              tabIndex={tabIndex}
            >
              {`${post === tutorial ? ">" : " "} ${capitalize(tutorial)}`}
            </MenuItem>
          )
        })}
      </SizedMenu>
    </div>
  )
}

export default Menu
