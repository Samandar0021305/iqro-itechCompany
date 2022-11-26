import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import Headers from '../components/Header/header'

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" />
    </Head>
    <Headers />
    <Component {...pageProps} />
  </>
}

export default appWithTranslation(MyApp)
