import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { tvFilePaths, TV_PATH } from "../../utils/mdxUtils"
import { GetStaticPropsResult, GetStaticPropsContext } from "next"
import React from "react"
import {
  // Content,
  PostStaticProps,
} from "../../components/postComponents"
import { Box, Grid } from "theme-ui"
import Youtube from "../../components/youtube"
import styled from "styled-components"
import { tvMenu } from "../../components/menu/menus"
import { Menu } from "../../components/menu"

const Wrapper = styled.div`
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;
`

type Concert = {
  date: string
  number: number
  code: string
  location: string
  name: string
  instrument: string
  bio: string[]
  links: Array<{
    text: string
    link: string
  }>
  payment: {
    venmo: string
    paypal: string
  }
  charity: {
    name: string
    bio: string[]
    link: string
  }
}

const CoolLink = styled.a`
  color: #edd;
`

const LinkText = styled.p`
  color: #edd;
  text-decoration: none;
  transition: color 0.3s linear;
  font-weight: 700;
  padding-left: 10px;

  border-radius: 10px;
  border: 1px solid transparent;

  &:hover {
    border-radius: 10px;
    border: 1px solid goldenrod;
    color: goldenrod;
  }

  &:active {
    opacity: 70%;
  }
`

export interface TVProps {
  source: Concert
  slug: string | string[]
}

export default function TV({ source }: TVProps) {
  return (
    <Grid
      style={{
        marginLeft: "3%",
      }}
      columns={[3, "3fr 1fr, 2fr"]}
    >
      <Box
        style={{
          overflow: "auto",
          height: "calc(100vh - 60px)",
          marginTop: "50px",
          paddingBottom: "100px",
        }}
      >
        <h1>
          #{source.number} | {source.name}
        </h1>
        <p>{source.date}</p>
        <Wrapper>
          <Youtube code={source.code} />
        </Wrapper>
      </Box>

      <Box>
        <div
          style={{
            overflow: "scroll",
            paddingBottom: "2em",
          }}
        >
          {/* bio */}
          <h3>Who:</h3>
          <div>
            {source.bio.map((p, i) => {
              return <p key={i}>{p}</p>
            })}
          </div>
          <h3>What: </h3>
          <div>
            {source.links.map((l, i) => {
              return (
                <div key={i}>
                  <CoolLink
                    target="_blank"
                    href={l.link}
                    rel="noopener noreferrer"
                  >
                    <LinkText>{l.text}</LinkText>
                  </CoolLink>
                </div>
              )
            })}
          </div>

          {/* charity */}
          <h3>Why: </h3>
          <h4>{source.charity.name}</h4>
          <div>
            {source.charity.bio.map((p, i) => {
              return <p key={i}>{p}</p>
            })}
          </div>
          <CoolLink href={source.charity.link}>
            <LinkText>Website</LinkText>
          </CoolLink>
        </div>
      </Box>
      <Box
        style={{
          overflow: "auto",
          height: "calc(100vh - 60px)",
          marginTop: "50px",
          paddingBottom: "100px",
        }}
      >
        <Menu
          data={tvMenu}
          sectionPath={"tv"}
          style={{
            overflow: "scroll",
            paddingBottom: "2em",
          }}
        />
      </Box>
    </Grid>
  )
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<PostStaticProps>> {
  const slug = context.params!.slug
  const tvFilePaths = path.join(TV_PATH, `${slug}.json`)
  const source = fs.readFileSync(tvFilePaths)

  const { content, data } = matter(source)
  const json = JSON.parse(content)

  return {
    props: {
      source: json,
      frontMatter: data,
      slug: slug!,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = tvFilePaths
    .map((path) => path.replace(/\.json/, ""))
    .map((slug) => ({ params: { slug } }))

  console.log(paths)
  return {
    paths,
    fallback: false,
  }
}
