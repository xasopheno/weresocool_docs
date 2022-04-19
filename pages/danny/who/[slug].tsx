import fs from "fs"
import matter from "gray-matter"
import Head from "next/head"
import path from "path"
import { dannyFilePaths, DANNY_PATH } from "../../../utils/mdxUtils"
import { GetStaticPropsContext } from "next"
import Image from "next/image"
import React from "react"
import {
  Content,
  PostContainer,
  PostProps,
} from "../../../components/postComponents"
import Layout from "../../../components/layout"
import { dannyMenu } from "../../../components/menu/menus"
import {serialize} from "next-mdx-remote/serialize"
import {MDXRemote} from "next-mdx-remote"

const components = {
  Image,
  Head,
}

export default function InterviewPage({ source }: PostProps) {

  return (
    <Layout sectionPath={"danny"} menuData={dannyMenu}>
      <PostContainer>
        <Content>
          <MDXRemote {...source} components={components} />
        </Content>
      </PostContainer>
    </Layout>
  )
}

export async function getStaticProps(
  context: GetStaticPropsContext
) {
  const slug = context.params!.slug
  const dannyFilePath = path.join(DANNY_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(dannyFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
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
