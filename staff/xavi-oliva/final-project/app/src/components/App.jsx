import { useEffect, useState } from 'react'
import Logger from '../vendor/Loggy'
import Context from './Context'
import Landing from './Landing'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Feedback from './Feedback'
import './App.sass'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { isJwtValid } from '../validators'

function App() {
    const logger = new Logger('App')

    logger.info('call')

    const [feedback, setFeedback] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (isJwtValid(sessionStorage.token))
            navigate('/')
        else
            handleUserLogout()
    }, [])

    const handleUserRegistered = () => handleLoginNavigation()

    const handleUserLoggedIn = () => navigate('/')

    const handleRegisterNavigation = () => navigate('/register')

    const handleLoginNavigation = () => navigate('/login')

    const handleLandingNavigation = () => navigate('/landing')

    const handleUserLogout = () => {
        delete sessionStorage.token

        handleLandingNavigation()
    }

    const handleUserDeleted = () => {
        navigate('/login')
    }

    // const handleFeedback = message => confirm(message)
    const handleFeedback = feedback => setFeedback(feedback)

    const handleFeedbackTimeout = () => setFeedback(null)

    logger.info('render')

    return <Context.Provider value={{ handleFeedback }}>
        <div className="App">
            <Routes>
                <Route path='/landing' element={<Landing onLoginLinkClicked={handleLoginNavigation} />} />
                <Route path="/login" element={<Login onUserLoggedIn={handleUserLoggedIn} onRegisterLinkClicked={handleRegisterNavigation} />} />
                <Route path="/register" element={<Register onUserRegistered={handleUserRegistered} onLoginLinkClicked={handleLoginNavigation} />} />
                <Route path="/" element={<Home onUserLogout={handleUserLogout} onUserDeleted={handleUserDeleted} />} />
            </Routes>
            {feedback && <Feedback level={feedback.level} message={feedback.message} onTimeout={handleFeedbackTimeout} />}
        </div>
    </Context.Provider>

}

export default App