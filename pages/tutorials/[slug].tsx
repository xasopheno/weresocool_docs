import Head from "next/head"
import Layout from "../../components/layout"
import React from "react"
import fs from "fs"
import hydrate from "next-mdx-remote/hydrate"
import matter from "gray-matter"
import path from "path"
import renderToString from "next-mdx-remote/render-to-string"
import { GetStaticPropsResult, GetStaticPropsContext } from "next"
import { WSCWithRatioChart } from "../../components/WSC_with_RatioChart"
import { Break, CoolText } from "../../components/mdx"
import { WereSoCool } from "../../components/WereSoCool"
import { capitalize, useStopAndWait } from "../../utils/misc"
import { tutorialFilePaths, TUTORIAL_PATH } from "../../utils/mdxUtils"
import { tutorialMenu } from "../../components/menu/menus"
import { useRouter } from "next/router"
import { Vimeo } from "../../components/video"
import {
  Content,
  GoldLink,
  LinkText,
  PostContainer,
  PostProps,
  PostStaticProps,
} from "../../components/postComponents"

const components = {
  WereSoCool,
  WSCWithRatioChart,
  Head,
  Vimeo,
  CoolText,
  Break,
}

export default function PostPage({ source, frontMatter }: PostProps) {
  const content = hydrate(source, { components })
  const router = useRouter()
  const stopAndWait = useStopAndWait()

  return (
    <Layout sectionPath={"tutorials"} menuData={tutorialMenu}>
      <PostContainer>
        <Content>
          <div>
            <h1 style={{ textDecoration: "underline" }}>{frontMatter.title}</h1>
            {frontMatter.description && <p>{frontMatter.description}</p>}
          </div>
          <div>
            {content}
            <Break />
            {frontMatter.next && (
              <GoldLink
                onClick={async () => {
                  await stopAndWait()
                  router.push(`/tutorials/${frontMatter.next}`)
                }}
              >
                <LinkText>{`Next Tutorial ~> ${capitalize(
                  frontMatter.next
                )}`}</LinkText>
              </GoldLink>
            )}
          </div>
        </Content>
      </PostContainer>
    </Layout>
  )
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<PostStaticProps>> {
  const slug = context.params!.slug
  const postFilePath = path.join(TUTORIAL_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

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
  const paths = tutorialFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
