import React from 'react'
import Logger from '../vendor/Loggy'
import Context from '../components/Context'
import Login from '../components/Login'
import Register from '../components/Register'
import Home from '../components/Home'
import Feedback from '../components/Feedback'
const { useState } = React

function App() {
    const logger = new Logger('App') 
        
    logger.info('call')
    
    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')
    const [feedback, setFeedback] = useState({ level: 'error', mesagge: 'hello world' })

    const handleUserRegistered = () => this.handleLoginNavigation()

    const handleUserLoggedIn = () => setView('home')

    const handleRegisterNavigation = () => setView ('register')

    const handleLoginNavigation = () => setView ('login')

    const handleUserLoggedOut = () => this.handleLoginNavigation()

    const handleFeedback = feedback => setFeedback(feedback)

    const handleFeedbackTimeout = () => setFeedback(null)

    logger.info('render')
    
    return <Context.Provider value={ handleFeedback }>
         <div className="App Container">
            {view === 'login' && <Login onUserLoggedIn={handleUserLoggedIn} onRegisterLinkClicked={handleRegisterNavigation} />}
            {view === 'register' && <Register onUserRegistered={handleUserRegistered} onLoginLinkClicked={handleLoginNavigation} />}
            {view === 'home' && <Home onUserLoggedOut={handleUserLoggedOut} />} 
            { feedback && <Feedback level={feedback.level} message={feedback.message} onTimeout={handleFeedbackTimeout} />}
        </div>
        </Context.Provider>
    }

    export default App