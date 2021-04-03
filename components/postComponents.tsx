import { MdxRemote } from "next-mdx-remote/types"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import styled from "styled-components"
export const GoldLink = styled.div`
  color: goldenrod;
  font-size: 1.25em;
`

export const PostContainer = styled.div`
  max-width: 55em;
  margin: auto;
  text-align: justify;
  -ms-text-justify: distribute-all-lines;
  text-justify: distribute-all-lines;
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

export const Content: React.FC = ({ children }) => {
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
