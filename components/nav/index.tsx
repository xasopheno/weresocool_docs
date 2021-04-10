import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { useStopAndWait } from "../../utils/misc"
import { useWindowSize } from "../../utils/useWindowSize"
import { LogoBox, LogoText, NavItem, StyledNav } from "./styles"
import _ from "lodash"

export const NavBar = () => {
  const router = useRouter()
  const { isMobile } = useWindowSize(680)
  const current = router.asPath.split("/").slice(1)[0]
  const stopAndWait = useStopAndWait()

  return (
    <StyledNav>
      <LogoBox onClick={() => router.push("/")}>
        <Image src="/magic.png" alt="WereSoCool.logo" width="40" height="40" />
        <Link href="/">
          {!isMobile ? (
            <LogoText onClick={async () => await stopAndWait()}>
              WereSoCool
            </LogoText>
          ) : (
            <></>
          )}
        </Link>
      </LogoBox>
      <Link href="/tutorials/welcome">
        <NavItem
          onClick={async () => await stopAndWait()}
          selected={current === "tutorials"}
        >
          Tutorial
        </NavItem>
      </Link>
      <Link href={`/tv/${_.sample(concerts)}`}>
        <NavItem
          onClick={async () => await stopAndWait()}
          selected={current === "tv"}
        >
          Concert Series
        </NavItem>
      </Link>
      <Link href="/interviews/brad_goode_1">
        <NavItem
          onClick={async () => await stopAndWait()}
          selected={current === "interviews"}
        >
          Interviews
        </NavItem>
      </Link>
      <Link href="/danny/who/about">
        <NavItem
          onClick={async () => await stopAndWait()}
          selected={current === "danny"}
        >
          Danny
        </NavItem>
      </Link>
    </StyledNav>
  )
}

const concerts = [
  "aj_salas",
  "alejandro",
  "ayo_awosika",
  "beck_burger",
  "bob_ladue",
  "caleb_curtis",
  "caroline_davis",
  "chris_votek",
  "corey_fogel",
  "dan_tepfer",
  "dina_maccabee",
  "dj_check_one",
  "doors_that_dont",
  "eric_marandi",
  "glenn_zaleski",
  "grant_gordy",
  "john_grigsby",
  "john_gunther",
  "kjetil_jerve",
  "maya_laliberte",
  "mike_thies",
  "pablo_eluchans",
  "shags_chamberlain",
  "soft_talon",
  "tomoko_omura",
  "topu_lyo",
]
