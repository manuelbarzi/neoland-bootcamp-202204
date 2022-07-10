import { useState, useEffect } from 'react'
import Logger from '../vendor/Loggy'
import Context from './Context'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Feedback from './Feedback'
import Profile from './Profile'
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
        else {
            delete sessionStorage.token
            navigate('/login')
        }
    }, [])

    const handleFeedback = feedback => setFeedback(feedback)

    const handleFeedbackTimeout = () => setFeedback(null)

    logger.info('render')

    return <Context.Provider value={{ handleFeedback }}>
        <div className="App Container">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
            </Routes>
            {feedback && <Feedback level={feedback.level} message={feedback.message} onTimeout={handleFeedbackTimeout} />}
        </div>
    </Context.Provider>
}

export default App