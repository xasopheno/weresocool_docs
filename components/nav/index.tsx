import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { LogoBox, LogoText, NavItem, StyledNav } from "./styles"

export const NavBar = () => {
  const router = useRouter()
  return (
    <StyledNav>
      <LogoBox onClick={() => router.push("/")}>
        <Image src="/magic.png" alt="WereSoCool.logo" width="40" height="40" />
        <Link href="/">
          <LogoText>WereSoCool</LogoText>
        </Link>
      </LogoBox>
      <Link href="/posts/welcome">
        <NavItem>Tutorial</NavItem>
      </Link>
      <Link href="/">
        <NavItem>Concert Series</NavItem>
      </Link>
      <Link href="/interviews/brad_goode_1">
        <NavItem>Interviews</NavItem>
      </Link>
      <Link href="/">
        <NavItem>Danny</NavItem>
      </Link>
    </StyledNav>
  )
}
