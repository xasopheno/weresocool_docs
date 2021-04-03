import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { useWindowSize } from "../../utils/useWindowSize"
import { LogoBox, LogoText, NavItem, StyledNav } from "./styles"

export const NavBar = () => {
  const router = useRouter()
  const windowSize = useWindowSize()
  const current = router.asPath.split("/").slice(1)[0]
  console.log(current)

  return (
    <StyledNav>
      <LogoBox onClick={() => router.push("/")}>
        <Image src="/magic.png" alt="WereSoCool.logo" width="40" height="40" />
        <Link href="/">
          {windowSize.width! > 680 ? <LogoText>WereSoCool</LogoText> : <></>}
        </Link>
      </LogoBox>
      <Link href="/tutorials/welcome">
        <NavItem selected={current === "tutorials"}>Tutorial</NavItem>
      </Link>
      <Link href="/">
        <NavItem selected={current === "tv"}>TV</NavItem>
      </Link>
      <Link href="/interviews">
        <NavItem selected={current === "interviews"}>Interviews</NavItem>
      </Link>
      <Link href="/">
        <NavItem selected={current === "danny"}>Danny</NavItem>
      </Link>
    </StyledNav>
  )
}
