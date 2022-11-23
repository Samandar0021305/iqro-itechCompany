import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import Headers from '../components/Header/header'
function MyApp({ Component, pageProps }) {
  return <>
  <Headers/>
  <Component {...pageProps} />
  </>
}

export default appWithTranslation(MyApp)
