import fs from "fs"
import matter from "gray-matter"
import renderToString from "next-mdx-remote/render-to-string"
import Head from "next/head"
import path from "path"
import { tvFilePaths, TV_PATH } from "../../utils/mdxUtils"
import { GetStaticPropsResult, GetStaticPropsContext } from "next"
import Image from "next/image"
import React from "react"
import {
  // Content,
  PostProps,
  PostStaticProps,
} from "../../components/postComponents"
import { Box, Grid } from "theme-ui"
import Youtube from "../../components/youtube"
import styled from "styled-components"
// import Layout from "../../components/layout"
// import { dannyMenu } from "../../components/menu/menus"

const components = {
  Image,
  Head,
}

const Wrapper = styled.div`
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;
`

type Concert = {
  date: string
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

export default function TV({ source }: TVProps) {
  console.log(source)
  return (
    <Grid
      style={{
        marginLeft: "8%",
      }}
      columns={[2, "3fr 2fr"]}
    >
      <Box
        style={{
          overflow: "auto",
          height: "calc(100vh - 60px)",
          marginTop: "50px",
        }}
      >
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
          test
        </div>
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
