import React, { useState } from "react"
import { Burger } from "../../menu"
import { MenuItem, StyledMenu } from "./Menu.styled"
import { capitalize, useStopAndWait } from "../../../utils/misc"
import { useRouter } from "next/router"
import { MobileStyledMenu } from "./MobileMenu.styled"
import { useWindowSize } from "../../../utils/useWindowSize"

type MenuDatum = {
  title: string
  items: (string | { name: string; link: string })[]
}

const data: MenuDatum[] = [
  {
    title: "Documentation",
    items: [{ name: "WereSoCool Docs", link: "documentation" }],
  },
  {
    title: "Tutorials",
    items: [
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
    ],
  },
]

const MenuSection = (props: {
  data: MenuDatum
  onClick: (path: string) => void
}) => {
  const section = props.data
  const router = useRouter()
  const current = router.asPath.split("/").slice(-1)[0]

  return (
    <div>
      <h1>{section.title}</h1>
      {section.items.map((item, idx) => {
        let itemName: string
        let itemLink: string
        if (typeof item === "string") {
          itemName = item
          itemLink = item
        } else {
          itemName = item.name
          itemLink = item.link
        }
        return (
          <MenuItem key={idx} onClick={() => props.onClick(itemLink)}>
            {`${current === itemLink ? ">" : " "} ${capitalize(itemName)}`}
          </MenuItem>
        )
      })}
    </div>
  )
}

const Menu = () => {
  const [open, setOpen] = useState(false)
  const windowSize = useWindowSize()
  const SizedMenu = windowSize.width! < 1000 ? MobileStyledMenu : StyledMenu
  const router = useRouter()
  const stopAndWait = useStopAndWait()

  return (
    <div>
      {windowSize.width! < 1000 && <Burger open={open} setOpen={setOpen} />}
      <SizedMenu open={open}>
        <div style={{ marginTop: "5rem" }}>
          {data.map((section, i) => {
            return (
              <MenuSection
                key={i}
                data={section}
                onClick={async (path: string) => {
                  await stopAndWait()
                  router.push(`/posts/${path}`)
                  setOpen(false)
                }}
              />
            )
          })}
        </div>
      </SizedMenu>
    </div>
  )
}

export default Menu
