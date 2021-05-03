// import Head from "next/head"
import { Break } from "../../../components/mdx"
import { Vimeo, Youtube } from "../../../components/video"
// import * as content from "../../../danny/work.json"
import { PostContainer } from "../../../components/postComponents"
import Layout from "../../../components/layout"
import { dannyMenu } from "../../../components/menu/menus"

const content = require("../../../danny/work.json")

type Years = {
  years: [
    {
      year: string
      work: Work[]
    }
  ]
}

type Work = {
  title: string
  // subtitle: string
  year: number
  collaborators: { string: string }[]
  tags?: string[]
  type: "video" | "image" | "text" | "recording"
  description: string[]
  links: { text: string; href: string }[]
  vimeo?: string
  youtube?: string
  spotify?: string
  bandcamp?: string
  image?: string
}

const BandCamp = (props: { code: string }) => {
  return (
    <iframe
      style={{
        border: "0",
        width: "350px",
        height: "621px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      src={`https://bandcamp.com/EmbeddedPlayer/album=${props.code}/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/`}
      seamless
    >
      <a href="https://liveinch.bandcamp.com/album/live-in-ch">
        Live in Ch by Meyer, Karason, Iannone, Zufferey, Xiaoping Ruiz, Aaron,
        Liechti, Ruther
      </a>
    </iframe>
  )
}

const Spotify = (props: { code: string }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe
        src={`https://open.spotify.com/embed/album/${props.code}`}
        width="100%"
        height="400px"
        frameBorder="0"
        // allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  )
}

export default function Work() {
  return (
    <Layout sectionPath={"danny"} menuData={dannyMenu}>
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "7rem",
            color: "orchid",
            margin: "1rem",
          }}
        >
          Make Work
        </h1>
        <PostContainer style={{ fontSize: "1.25rem", paddingTop: "20px" }}>
          I am always making things, but I never know what to do with those
          things when they're done. I have a bad habit of working on projects
          with all of my might and then having finally finished something I'm
          all too proud of, I retire that thing sit on a hardrive or float
          around in a cloud somewhere. This page is an effort to give these
          things a home.
        </PostContainer>
        {((content as unknown) as Years).years.map((year, i) => {
          // console.log(year)
          return (
            <div key={i}>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "7rem",
                  color: "darkgoldenrod",
                  border: "1px solid goldenrod",
                }}
              >
                {year.year}
              </h1>
              {year.work.map((work: Work, j) => {
                return (
                  <div key={j}>
                    <h2
                      style={{
                        textAlign: "center",
                        fontSize: "3rem",
                        color: "mediumorchid",
                        textDecoration: "underline",
                      }}
                    >
                      {work.title}
                    </h2>
                    <PostContainer style={{ padding: 0 }}>
                      <div
                        style={{
                          fontSize: "1.25rem",
                        }}
                      >
                        {work.description.map((p: string, k) => (
                          <p key={k}>{p}</p>
                        ))}
                      </div>
                    </PostContainer>
                    <div>
                      {work.spotify && <Spotify code={work.spotify} />}
                      {work.youtube && <Youtube code={work.youtube} />}
                      {work.vimeo && <Vimeo code={work.vimeo} />}
                      {work.bandcamp && <BandCamp code={work.bandcamp} />}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                      }}
                    >
                      {work.collaborators.map((c: { string: string }, l) => {
                        return (
                          <p
                            style={{
                              padding: "0px",
                              margin: "0px",
                              fontSize: "1.5rem",
                            }}
                            key={l}
                          >
                            <span>{Object.keys(c)[0]}</span>:
                            <span> {Object.values(c)[0]}</span>
                          </p>
                        )
                      })}
                    </div>
                    <Break />
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

// {year.work.map((w) => {
// ;<MakeWork work={w} />
// })}
// export async function getStaticPaths() {
// const paths = content.pages.map((page) => {
// const slug = page.path.split("/").slice(1)
// return { params: { slug } }
// })
// return { paths, fallback: true }
// }

// export async function getStaticProps({ params }) {
// const currentPath = `/${params.slug.join("/")}`
// const page = content.pages.find((page) => page.path === currentPath) || {
// notfound: true,
// }
// return { props: { page } }
// }
