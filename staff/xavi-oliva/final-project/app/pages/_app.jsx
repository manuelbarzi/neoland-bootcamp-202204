import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Brun's Flats</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
