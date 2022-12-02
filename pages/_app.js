import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import "../styles/home.css"

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"  />
    </Head>
    
    <Component {...pageProps}  />
  </>
}

export default appWithTranslation(MyApp)
