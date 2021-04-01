import React from "react"
import Image from "next/image"
import styled from "styled-components"

const InterviewImageContainer = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`

const InterviewMain = () => {
  return (
    <InterviewImageContainer>
      <h1>Interviews</h1>
      <Image src={"/danny_interview_small.jpeg"} width={509} height={409} />
      <p>Interviews with nice smart people.</p>
    </InterviewImageContainer>
  )
}

export default InterviewMain
