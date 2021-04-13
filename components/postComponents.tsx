import { MdxRemote } from "next-mdx-remote/types"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import styled from "styled-components"
export const GoldLink = styled.div`
  color: goldenrod;
  font-size: 1.4em;
`

export const PostContainer = styled.div`
  padding-bottom: 80px;
  max-width: 55em;
  margin: auto;
  text-align: justify;
  -ms-text-justify: distribute-all-lines;
  text-justify: distribute-all-lines;
  overflow: auto;
`

export const CoolLink = styled.a`
  color: #edd;
`

export const LinkText = styled.p`
  color: #edd;
  text-decoration: none;
  transition: color 0.2s linear;
  transition: border 0.4s linear;
  font-weight: 700;
  padding-left: 20px;
  padding-right: 20px;
  width: fit-content;

  border-radius: 10px;
  border: 1px solid transparent;

  &:hover {
    border-radius: 10px;
    border: 1px solid goldenrod;
    color: goldenrod;
  }

  &:active {
    opacity: 70%;
  }
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
