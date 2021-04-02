import { MdxRemote } from "next-mdx-remote/types"
import styled from "styled-components"
export const GoldLink = styled.div`
  color: goldenrod;
  font-size: 1.25em;
`

export const PostContainer = styled.div`
  max-width: "55em";
  margin: auto;
`

export type FrontMatter = {
  [key: string]: any
}

export type PostProps = { source: MdxRemote.Source; frontMatter: FrontMatter }

export interface PostStaticProps {
  source: MdxRemote.Source
  frontMatter: FrontMatter
  slug: string | string[]
}