import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Headers from "../components/Header/header";
import Loader from "../components/loader/loader";
import "../styles/home.css";
import Head from "next/head";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  // const [loader, setLoader] = useState(false);

  // useEffect(() => {
  //   setLoader(true);
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 2500);
  // }, []);

  return (
    <div className="relative">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
        />
      </Head>
      <Headers />
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(MyApp);
