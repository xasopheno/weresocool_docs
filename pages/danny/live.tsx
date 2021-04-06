import fs from "fs"
import matter from "gray-matter"
import hydrate from "next-mdx-remote/hydrate"
import renderToString from "next-mdx-remote/render-to-string"
import Head from "next/head"
import path from "path"
import { GIGS_PATH } from "../../utils/mdxUtils"
import { GetStaticPropsResult } from "next"
import Image from "next/image"
import React from "react"
import { Content, PostContainer } from "../../components/postComponents"
import Layout from "../../components/layout"
import { interviewMenu } from "../../components/menu/menus"
import { MdxRemote } from "next-mdx-remote/types"

const components = {
  Image,
  Head,
}

export default function InterviewPage({
  source,
}: {
  source: MdxRemote.Source
}) {
  const content = hydrate(source, { components })

  return (
    <Layout sectionPath={"danny"} menuData={interviewMenu}>
      <PostContainer>
        <Content>
          <div>{content}</div>
        </Content>
      </PostContainer>
    </Layout>
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{ source: MdxRemote.Source }>
> {
  const gigsFilePath = path.join(GIGS_PATH, `gigs.mdx`)
  const source = fs.readFileSync(gigsFilePath)

  const { content, data } = matter(source)

  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
    },
  }
}
