import Head from 'next/head'
import '../styles/globals.css'
import { Header, Footer } from '../components'

if (typeof XMLHttpRequest === 'undefined') {
  var XMLHttpRequest = require('xhr2');
  
  global.XMLHttpRequest = XMLHttpRequest
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Brun's Flats</title>
      </Head>
      <main className='w-full min-h-screen h-full'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}

export default MyApp
