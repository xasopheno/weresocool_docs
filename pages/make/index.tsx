// import Head from "next/head"
import { Youtube } from "../../components/video"
import content from "../../danny/work.json"

type Content = {
  years: Year[]
}

type Year = {
  year: string
  work: Work[]
}

type Work = {
  title: string
  subtitle: string
  year: number
  collaborators: string[]
  type: "video" | "image" | "text" | "recording"
  description: string
  links: [{ text: "cool link"; href: "weresocool.com" }]
  vimeo?: string
  youtube?: string
  bandcamp?: string
  image?: string
}

const Spotify = (props: { code: string }) => {
  return (
    <iframe
      src={`https://open.spotify.com/embed/album/${props.code}`}
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  )
}

export default function Work({ page }) {
  return (
    <div>
      {content.years.map((year, i) => {
        console.log(year)
        return (
          <div key={i}>
            <h1>{year.year}</h1>
            {year.work.map((work, j) => {
              return (
                <div key={j}>
                  <h2>{work.title}</h2>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    {work.collaborators.map((c, i) => (
                      <p style={{ padding: "5px" }} key={i}>
                        {c}
                      </p>
                    ))}
                  </div>
                  {work.spotify && <Spotify code={work.spotify} />}
                  {work.youtube && <Youtube code={work.youtube} />}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
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
