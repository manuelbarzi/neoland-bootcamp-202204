import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Brun's Flats</title>
      </Head>
      <div className='w-screen bg-gradient-primary'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
