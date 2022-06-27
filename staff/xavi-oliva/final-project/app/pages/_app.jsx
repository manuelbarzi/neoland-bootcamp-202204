import Head from 'next/head'
import '../styles/globals.css'
import { Header, Footer } from '../components'
import { useRouter } from "next/router"
import { FunctionalContext } from '../contexts/functional-context';

if (typeof XMLHttpRequest === 'undefined') {
  var XMLHttpRequest = require('xhr2');

  global.XMLHttpRequest = XMLHttpRequest
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  // const [feedback, setFeedback] = useState(null)

  const showCompo = router.pathname === "/login" ? false : true && router.pathname === "/register" ? false : true;

  // const handleFeedback = feedback => setFeedback(feedback)

  // const handleFeedbackTimeout = () => setFeedback(null)

  return (
    <>
      <Head>
        <title>Brun's Flats</title>
      </Head>
      <FunctionalContext.Provider>
        <main className='flex flex-col w-full h-screen'>
          {showCompo && <Header />}
          <Component {...pageProps} />
          {showCompo && <Footer />}
        </main>
      </FunctionalContext.Provider>
    </>
  )
}

export default MyApp

// formas de englobar partes de código

// etoquetas html y dentro todo el contenido de la app
// usar un middleware