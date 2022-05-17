import { useState } from 'react'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Feedback from './Feedback'
import Context from './Context'
import './App.sass'

function App() {
    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')
    const [feedback, setFeedback] = useState(null)

    const handleLoggedIn = () => setView('home')

    const handleNavToRegister = () => setView('register')

    const handleOnUserRegistered = () => setView('login')

    const handleNavToLogin = () => setView('login')

    const handleOnLoggedOut = () => setView('login')

    const handleOnDeletedUser = () => setView('login')

    const handleFeedback = (message, level) => {
        setFeedback({level, message})
    }

    const handleFeedbackTimeOut = () => setFeedback(null)

    return <Context.Provider value={{ handleFeedback }}>
        <div className="App">
            {view === 'login' && <Login onLoggedIn={handleLoggedIn} onRegisterNavigation={handleNavToRegister} />}
            {view === 'register' && <Register onRegistered={handleOnUserRegistered} onLoginNavigation={handleNavToLogin} />}
            {view === 'home' && <Home onLoggedOut={handleOnLoggedOut} onDeletedUser={handleOnDeletedUser} />}
            {feedback !== null && <Feedback level={feedback.level} message={feedback.message} onTimeout={handleFeedbackTimeOut} />}
        </div>
    </Context.Provider>
}

export default App