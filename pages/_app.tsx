// import App from "next/app";
import { AppProps } from "next/app"
import { useWasm } from "../utils/useWasm"
import Image from "next/image"
import Link from "next/link"
import Layout from "../components/Layout"
import { useRouter } from "next/router"
import styled from "styled-components"

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  // justify-content: space-around;
  background-color: #262523;
  border-bottom: 1px solid #272727;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  height: 60px;
  text-align: center;
  padding-left: 5%;
`

const NavItem = styled.p`
  padding: 0 20px 0 20px;
  line-height: 60px;
  align-self: center;
  font-weight: 300;
  font-size: 1.3em;
  cursor: pointer;
  margin: 0 10px 0 10px;
  :active {
    background-color: #313131;
  }
`

const NavBar = () => {
  const router = useRouter()
  return (
    <StyledNav>
      <div
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
        onClick={() => router.push("/")}
      >
        <Image src="/magic.png" alt="WereSoCool.logo" width="40" height="40" />
      </div>
      <Link href="/">
        <NavItem>WereSoCool</NavItem>
      </Link>
      <Link href="/posts/welcome">
        <NavItem>Tutorial</NavItem>
      </Link>
      <Link href="/">
        <NavItem>Concert Series</NavItem>
      </Link>
      <Link href="/interviews/brad_goode_1">
        <NavItem>Interviews</NavItem>
      </Link>
      <Link href="/">
        <NavItem>Danny</NavItem>
      </Link>
    </StyledNav>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  const [WasmProvider, wasmObject] = useWasm()

  return (
    <div>
      <NavBar />
      <Layout>
        <WasmProvider value={wasmObject}>
          <Component {...pageProps} />
        </WasmProvider>
      </Layout>
    </div>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
