import React from "react"
import { useLoadedWasm, WASM_READY_STATE } from "../utils/useWasm"
import { WSCWithRatioChart } from "../components/WSC_with_RatioChart"
import styled from "styled-components"
import Link from "next/link"

const language = `{ f: 311.127, l: 1, g: 1, p: 0 }

thing1 = {
  O[
    (1/1, 2, 1, 1),
    (1/1, 0, 1, -1),
  ]
  | Seq [
    Fm 1, Fm 9/8, Fm 5/4
  ]
}

thing2 = {
  O[
    (1/1, 2, 1, 1),
    (1/1, 0, 1, -1),
  ]
  | Seq [
    Fm 3/4
  ]
  | FitLength thing1
}

main = {
  Overlay [
    thing1,
    thing2
  ]
}
`
const Stuff = (): React.ReactElement => {
  return <WSCWithRatioChart language={language} />
}

const HeaderContainer = styled.div`
  background-color: rgb(47, 46, 44);
  color: rgb(236, 224, 204);
`

const HeaderPadding = styled.div`
  padding-top: 60px;
  padding-bottom: 70px;
`

const HeaderTitle = styled.h1`
  color: goldenrod;
  text-align: center;
  margin: 0px;
  font-size: 45px;
  letter-spacing: 0.01em;
  font-weight: 800;
`

const HeaderDescription = styled.p`
  padding-top: 15px;
  text-align: center;
  font-size: 24px;
  letter-spacing: 0.01em;
  font-weight: 200;
`

const HeaderButtonContainer = styled.div`
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  flex: 0 1 auto;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`
const GetStartedButton = styled.div`
  a {
    text-decoration: none;
  }
  text-align: right;
  padding-right: 7px;
  padding-left: 7px;
  color: rgb(236, 224, 204);
  display: inline-block;
  font-size: 16px;
  background-color: darkgoldenrod;
  color: rgb(0, 0, 0);
  padding: 10px 25px;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.2s ease-out 0s;
  :hover {
    background-color: goldenrod;
  }
`

const TakeTutorialButton = styled.div`
  padding-left: 20px;
  cursor: pointer;
  color: darkgoldenrod;
  :hover {
    color: white;
  }
`

const App = () => {
  const { readyState } = useLoadedWasm()

  return (
    <div>
      <HeaderContainer>
        <HeaderPadding>
          <HeaderTitle>WereSoCool</HeaderTitle>
          <HeaderDescription>
            A language for composing microtonal music
          </HeaderDescription>
          <HeaderButtonContainer>
            <GetStartedButton>
              <Link href={"/tutorials/getting_started"}>Get Started</Link>
            </GetStartedButton>
            <Link href={"/tutorials/welcome"}>
              <TakeTutorialButton>Take the Tutorial {"~>"}</TakeTutorialButton>
            </Link>
          </HeaderButtonContainer>
        </HeaderPadding>
      </HeaderContainer>
      <div
        style={{
          maxWidth: "90vw",
          margin: "auto",
        }}
      >
        {readyState === WASM_READY_STATE.READY && <Stuff />}
      </div>
    </div>
  )
}

export default App
