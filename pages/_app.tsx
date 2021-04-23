import React, { useReducer, useState } from "react"
import { AppProps } from "next/app"
import { useWasm } from "../utils/useWasm"
import { NavBar } from "../components/nav"
import { ThemeProvider } from "theme-ui"
import { theme } from "../components/layout/theme"
import { Dispatch, DispatchContext } from "../state/actions"
import { mainReducer } from "../state/reducers"
import { GlobalContext, intialStore } from "../state/store"
import ReactGA from "react-ga"
ReactGA.initialize("UA-38957815-2")
import "../styles.css"

function App({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
  const [WasmProvider, wasmObject] = useWasm()

  const [store, rawDispatch] = useReducer(mainReducer, intialStore)
  const [dispatch] = useState(new Dispatch(rawDispatch))

  return (
    <WasmProvider value={wasmObject}>
      <GlobalContext.Provider value={store}>
        <DispatchContext.Provider value={dispatch}>
          <ThemeProvider theme={theme}>
            <NavBar />
            <div
              style={{
                height: "calc(100vh - 60px)",
                marginTop: "60px",
              }}
            >
              <Component {...pageProps} />
            </div>
          </ThemeProvider>
        </DispatchContext.Provider>
      </GlobalContext.Provider>
    </WasmProvider>
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
