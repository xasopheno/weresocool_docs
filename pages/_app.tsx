import React, { useReducer, useRef, useState } from "react"
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
import { i18n } from '@lingui/core'
import { initTranslation } from '../translation/utils'
import { I18nProvider } from '@lingui/react'
import {useRouter} from "next/router"
import { Trans } from '@lingui/macro'

initTranslation(i18n)

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const locale = router.locale || router.defaultLocale || "en"
  const firstRender = useRef(true)

  if (typeof window !== "undefined") {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
  const [WasmProvider, wasmObject] = useWasm()

  const [store, rawDispatch] = useReducer(mainReducer, intialStore)
  const [dispatch] = useState(new Dispatch(rawDispatch))

 if (pageProps.translation && firstRender.current) {
    i18n.load(locale, pageProps.translation)
    i18n.activate(locale)
    firstRender.current = false
  }

  return (

    <I18nProvider i18n={i18n}>
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
                <p>
                  <Trans id="next-explanation">My text to be translated</Trans>
                </p>
                <Component {...pageProps} />
              </div>
            </ThemeProvider>
          </DispatchContext.Provider>
        </GlobalContext.Provider>
      </WasmProvider>
    </I18nProvider>
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
