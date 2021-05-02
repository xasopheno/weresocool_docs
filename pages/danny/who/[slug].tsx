import fs from "fs"
import matter from "gray-matter"
import hydrate from "next-mdx-remote/hydrate"
import renderToString from "next-mdx-remote/render-to-string"
import Head from "next/head"
import path from "path"
import { dannyFilePaths, DANNY_PATH } from "../../../utils/mdxUtils"
import { GetStaticPropsResult, GetStaticPropsContext } from "next"
import Image from "next/image"
import React from "react"
import {
  Content,
  PostContainer,
  PostProps,
  PostStaticProps,
} from "../../../components/postComponents"
import Layout from "../../../components/layout"
import { dannyMenu } from "../../../components/menu/menus"

const components = {
  Image,
  Head,
}

export default function InterviewPage({ source }: PostProps) {
  const content = hydrate(source, { components })

  return (
    <Layout sectionPath={"danny"} menuData={dannyMenu}>
      <PostContainer>
        <Content>
          <div>{content}</div>
        </Content>
      </PostContainer>
    </Layout>
  )
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<PostStaticProps>> {
  const slug = context.params!.slug
  const dannyFilePath = path.join(DANNY_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(dannyFilePath)

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
      frontMatter: data,
      slug: slug!,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = dannyFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
