import Link from "next/link"
import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;
`

const TV = () => {
  return (
    <Wrapper>
      <div>
        Danny Meyer is a New York City-based musician and computer programmer.
        His credits as a saxophonist include performing, recording and touring
        internationally with the likes of Julia Holter, Chairlift, ExoTech, Live
        Footage. He is currently writing a programming language for composing
        microtonal music geometrically and participates in on-going projects
        with dancers, video artists, poets, photographers and other musicians
        and programmers.
      </div>
      <div>
        <Link href="https://www.github.com/xasopheno">Github</Link>
        <Link href="https://www.youtube.com/channel/UCBCjwUpz2HiOZglcHP2Io5Q">
          Github
        </Link>
      </div>
      Contact: letsmakestuff at xasopheno dot com
    </Wrapper>
  )
}

export default TV
