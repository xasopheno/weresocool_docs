// import App from "next/app";
import { Burger, Menu } from "../components/menu";
import FocusLock from "react-focus-lock";
import { useState } from "react";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <FocusLock disabled={!open}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </FocusLock>
      <Component {...pageProps} />
    </>
  );
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

export default MyApp;
