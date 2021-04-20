import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { tvFilePaths, TV_PATH } from "../../utils/mdxUtils"
import { GetStaticPropsResult, GetStaticPropsContext } from "next"
import React from "react"
import {
  CoolLink,
  LinkText,
  PostStaticProps,
} from "../../components/postComponents"
import { Box, Grid } from "theme-ui"
import { Youtube } from "../../components/video"
import styled from "styled-components"
import { tvMenu } from "../../components/menu/menus"
import { Menu } from "../../components/menu"
import { useWindowSize } from "../../utils/useWindowSize"

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

export interface TVProps {
  source: Concert
  slug: string | string[]
}

const Info: React.FC<{ source: Concert }> = (props: { source: Concert }) => {
  return (
    <div
      style={{
        textAlign: "justify",
      }}
    >
      <h3>Who:</h3>
      <div>
        {props.source.bio.map((p, i) => {
          return <p key={i}>{p}</p>
        })}
      </div>
      <h3>What: </h3>
      <div>
        {props.source.links.map((l, i) => {
          return (
            <div key={i}>
              <CoolLink target="_blank" href={l.link} rel="noopener noreferrer">
                <LinkText>{l.text}</LinkText>
              </CoolLink>
            </div>
          )
        })}
      </div>

      <h3>Why: </h3>
      <h4>{props.source.charity.name}</h4>
      <div>
        {props.source.charity.bio.map((p, i) => {
          return <p key={i}>{p}</p>
        })}
      </div>
      <CoolLink href={props.source.charity.link}>
        <LinkText>More Information</LinkText>
      </CoolLink>
    </div>
  )
}

const Video: React.FC<{ source: Concert }> = (props: { source: Concert }) => {
  return (
    <div>
      <h1>WereSoCool Concert Series</h1>
      <h2>
        #{props.source.number} | {props.source.name}
      </h2>
      <p>{props.source.date}</p>
      <Wrapper>
        <Youtube code={props.source.code} />
      </Wrapper>
    </div>
  )
}

export default function TV({ source }: TVProps) {
  const { isMobile } = useWindowSize()

  if (isMobile) {
    return (
      <div>
        <Video source={source} />

        <div
          style={{
            padding: "20px",
          }}
        >
          <Info source={source} />
        </div>

        <Menu
          data={tvMenu}
          sectionPath={"tv"}
          style={{
            padding: "20px",
          }}
        />
      </div>
    )
  } else {
    return (
      <Grid
        gap={2}
        style={{
          marginLeft: "3%",
        }}
        columns={[3, "1fr 1fr 1fr"]}
      >
        <Box
          style={{
            overflow: "auto",
            height: "calc(100vh - 60px)",
            paddingBottom: "100px",
          }}
        >
          <Video source={source} />
        </Box>

        <Box>
          <div
            style={{
              overflow: "auto",
              height: "calc(100vh - 60px)",
              marginTop: "20px",
              paddingBottom: "2em",
            }}
          >
            <Info source={source} />
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

  return {
    paths,
    fallback: false,
  }
}
