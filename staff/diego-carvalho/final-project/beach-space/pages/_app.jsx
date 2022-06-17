import { useState } from 'react'
import Link from 'next/link'
import { MdHome, MdOutlineCalendarToday, MdLogout, MdSearch, MdPermIdentity, MdAddCircleOutline } from "react-icons/md"
import Context from '../components/Context'
import Feedback from '../components/Feedback'
import '../styles/index.sass'

function MyApp({ Component, pageProps }) {
  const [feedback, setFeedback] = useState(null)
  const handleFeedback = feedback => setFeedback(feedback)
  const handleFeedbackTimeout = () => setFeedback(null)

  // if no token, navigate to login

  return (
    <>
      <Context.Provider value={{ handleFeedback }}>
        <Component {...pageProps} />

        {feedback && <Feedback level={feedback.level} message={feedback.message} onTimeout={handleFeedbackTimeout} />}

        <footer className="Home__footer Container">
          <nav className='nav'>
            <Link href="/"><a><MdHome className="icons" /></a></Link>
            <Link href="/create-event"><a><MdAddCircleOutline className="icons" /></a></Link>
            <Link href="/my-calendar" ><a><MdOutlineCalendarToday className="icons" /></a></Link>
            <Link href="/profile"><a><MdPermIdentity className="icons" /></a></Link>
          </nav>
        </footer>
      </Context.Provider>
    </>

  )


}

export default MyApp
