const { useState } = React

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
        setTimeout(handleFeedbackTimeOut, 2000)
    }

    const handleFeedbackTimeOut = () => setFeedback(null)

    return <Context.Provider value={{ handleFeedback }}>
        <div className="App">
            {view === 'login' && <Login onLoggedIn={handleLoggedIn} onRegisterNavigation={handleNavToRegister} />}
            {view === 'register' && <Register onRegistered={handleOnUserRegistered} onLoginNavigation={handleNavToLogin} />}
            {view === 'home' && <Home onLoggedOut={handleOnLoggedOut} onDeletedUser={handleOnDeletedUser} />}
            {feedback !== null && <Feedback level={feedback.level} message={feedback.message} />}
        </div>
    </Context.Provider>
}