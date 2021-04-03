import React from "react"
import Image from "next/image"
import styled from "styled-components"
import Layout from "../../components/layout"
import { interviewMenu } from "../../components/menu/menus"

const InterviewImageContainer = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`

const InterviewMain = () => {
  return (
    <Layout sectionPath={"interviews"} menuData={interviewMenu}>
      <InterviewImageContainer>
        <Image src={"/danny_interview_small.jpeg"} width={509} height={409} />
        <p>Interviews with nice smart people.</p>
      </InterviewImageContainer>
    </Layout>
  )
}

export default InterviewMain
