// import App from "next/app";
import { AppProps } from "next/app";
import { useWasm } from "../utils/useWasm";
import Image from "next/image";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const [WasmProvider, wasmObject] = useWasm();

  return (
    <Layout>
      <div>
        <WasmProvider value={wasmObject}>
          <Image
            src="/magic.png"
            alt="WereSoCool.logo"
            width="64"
            height="64"
          />
          <Component {...pageProps} />
        </WasmProvider>
      </div>
    </Layout>
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
