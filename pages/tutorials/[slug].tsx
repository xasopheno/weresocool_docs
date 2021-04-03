import fs from "fs"
import matter from "gray-matter"
import hydrate from "next-mdx-remote/hydrate"
import renderToString from "next-mdx-remote/render-to-string"
import Head from "next/head"
import path from "path"
import { tutorialFilePaths, TUTORIAL_PATH } from "../../utils/mdxUtils"
import { WereSoCool } from "../../components/WereSoCool"
import { WSCWithRatioChart } from "../../components/WSC_with_RatioChart"
import { GetStaticPropsResult, GetStaticPropsContext } from "next"
import { capitalize, useStopAndWait } from "../../utils/misc"
import { useRouter } from "next/router"
import React from "react"
import {
  GoldLink,
  PostContainer,
  PostStaticProps,
  PostProps,
  Content,
} from "../../components/postComponents"
import Layout from "../../components/layout"
import { tutorialMenu } from "../../components/menu/menus"

const components = {
  WereSoCool,
  WSCWithRatioChart,
  Head,
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
            <h1>{frontMatter.title}</h1>
            {frontMatter.description && <p>{frontMatter.description}</p>}
          </div>
          <div>
            {content}
            {frontMatter.next && (
              <GoldLink
                onClick={async () => {
                  await stopAndWait()
                  router.push(`/tutorials/${frontMatter.next}`)
                }}
              >
                {`Next Tutorial ~> ${capitalize(frontMatter.next)}`}
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
