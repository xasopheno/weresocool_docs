import React from "react"
import { AppProps } from "next/app"
import { useWasm } from "../utils/useWasm"
import { NavBar } from "../components/nav"
import { ThemeProvider } from "theme-ui"
import { theme } from "../components/layout/theme"

function App({ Component, pageProps }: AppProps) {
  const [WasmProvider, wasmObject] = useWasm()
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <div
        style={{
          overflow: "auto",
          height: "calc(100vh - 60px)",
          marginTop: "60px",
        }}
      >
        <WasmProvider value={wasmObject}>
          <Component {...pageProps} />
        </WasmProvider>
      </div>
    </ThemeProvider>
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

export default App
