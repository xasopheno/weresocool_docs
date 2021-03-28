// import App from "next/app";
import { AppProps } from "next/app";
import { useWasm } from "../utils/useWasm";
import Image from "next/image";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const [WasmProvider, wasmObject] = useWasm();

  return (
    <div>
      <div style={{ position: "absolute", top: 0, left: 0 }}>
        <Image src="/magic.png" alt="WereSoCool.logo" width="64" height="64" />
      </div>
      <Layout>
        <WasmProvider value={wasmObject}>
          <Component {...pageProps} />
        </WasmProvider>
      </Layout>
    </div>
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
