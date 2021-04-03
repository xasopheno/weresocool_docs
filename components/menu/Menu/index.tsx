import React, { useState } from "react"
import { Burger } from "../../menu"
import { MenuItem, StyledMenu } from "./Menu.styled"
import { capitalize, useStopAndWait } from "../../../utils/misc"
import { useRouter } from "next/router"
import { MobileStyledMenu } from "./MobileMenu.styled"
import { useWindowSize } from "../../../utils/useWindowSize"
import { MenuDatum } from "../menus"

const MenuSection = (props: {
  data: MenuDatum
  onClick: (path: string) => void
}) => {
  const section = props.data
  const router = useRouter()
  const current = router.asPath.split("/").slice(-1)[0]

  return (
    <div>
      <h1 style={{ fontSize: "20px" }}>{section.title}</h1>
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

interface SizedMenuProps extends React.HTMLAttributes<Element> {
  children: React.ReactChild | React.ReactChildren
  open: boolean
}

const SizedMenu = ({ children, open }: SizedMenuProps): React.ReactElement => {
  const windowSize = useWindowSize()
  if (windowSize.width! < 1000) {
    return <MobileStyledMenu open={open}>{children}</MobileStyledMenu>
  } else {
    return <StyledMenu>{children}</StyledMenu>
  }
}

interface MenuProps extends React.HTMLAttributes<Element> {
  data: MenuDatum[]
  sectionPath: string
}

const Menu = (props: MenuProps) => {
  const [open, setOpen] = useState(false)
  const windowSize = useWindowSize()
  const router = useRouter()
  const stopAndWait = useStopAndWait()

  return (
    <div>
      {windowSize.width! < 1000 && <Burger open={open} setOpen={setOpen} />}
      <SizedMenu open={open}>
        <div>
          {props.data.map((section, i) => {
            return (
              <MenuSection
                key={i}
                data={section}
                onClick={async (path: string) => {
                  await stopAndWait()
                  router.push(`/${props.sectionPath}/${path}`)
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
