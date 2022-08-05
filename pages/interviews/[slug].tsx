import fs from "fs"
import matter from "gray-matter"
import Head from "next/head"
import path from "path"
import { interviewFilePaths, INTERVIEWS_PATH } from "../../utils/mdxUtils"
import { GetStaticPropsContext } from "next"
import { capitalize } from "../../utils/misc"
import { useRouter } from "next/router"
import Image from "next/image"
import React from "react"
import {
  Content,
  GoldLink,
  PostContainer,
  PostProps,
} from "../../components/postComponents"
import Layout from "../../components/layout"
import { interviewMenu } from "../../components/menu/menus"
import {serialize} from "next-mdx-remote/serialize"
import {MDXRemote} from "next-mdx-remote"

const components = {
  Image,
  Head,
}

export default function InterviewPage({ source, frontMatter }: PostProps) {
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
            <MDXRemote {...source} components={components} />
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

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params?.slug;
  const postFilePath = path.join(INTERVIEWS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
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
      slug: slug!
    },
  }
}
export const getStaticPaths = async ({locales}: {locales: string[]}) => {
    const paths = locales.flatMap(locale => interviewFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug }, locale })))

  return {
    paths,
    fallback: false,
  }
}
