import fs from "fs"
import matter from "gray-matter"
import hydrate from "next-mdx-remote/hydrate"
import renderToString from "next-mdx-remote/render-to-string"
import Head from "next/head"
import path from "path"
import { interviewFilePaths, INTERVIEWS_PATH } from "../../utils/mdxUtils"
import { GetStaticPropsResult, GetStaticPropsContext } from "next"
import { capitalize } from "../../utils/misc"
import { useRouter } from "next/router"
import Image from "next/image"
import React, { useEffect, useRef } from "react"
import {
  GoldLink,
  PostContainer,
  PostProps,
  PostStaticProps,
} from "../../components/postComponents"
import Layout from "../../components/layout"
import { interviewMenu } from "../../components/menu/menus"

const components = {
  Image,
  Head,
}

const Content: React.FC = ({ children }) => {
  const topRef = useRef(null)
  const router = useRouter()
  useEffect(() => {
    // @ts-ignore
    topRef.current.scrollIntoView()
  }, [router.asPath])
  return (
    <div>
      <div ref={topRef} />
      {children}
    </div>
  )
}

export default function InterviewPage({ source, frontMatter }: PostProps) {
  const content = hydrate(source, { components })
  const router = useRouter()

  return (
    <Layout sectionPath={"interviews"} menuData={interviewMenu}>
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
                  router.push(`/interviews/${frontMatter.next}`)
                }}
              >
                {`Next Interview ~> ${capitalize(frontMatter.next)}`}
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
  const interviewFilePath = path.join(INTERVIEWS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(interviewFilePath)

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
  const paths = interviewFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
