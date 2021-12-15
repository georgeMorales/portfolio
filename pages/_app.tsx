import '../styles/globals.css'
import 'bootswatch/dist/journal/bootstrap.min.css'
//import 'bootswatch/morph/bootstrap.min.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
