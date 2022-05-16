const { useState } = React

function App() {
    const logger = new Logger('App')

    logger.info('call')

    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')
    const [feedback, setFeedback] = useState({ level: 'error', message: 'hello world'})

    const handleUserRegistered = () => handleLoginNavigation()

    const handleUserLoggedIn = () => setView('home')

    const handleRegisterNavigation = () => setView('register')

    const handleLoginNavigation = () => setView('login')

    const handleUserLoggedOut = () => handleLoginNavigation()

    //const handleFeedback = message => confirm(message)
    const handleFeedback = feedback => setFeedback(feedback)

    const handleFeedbackTimeout = () => setFeedback(null)

    logger.info('render')

    return <Context.Provider value={{ handleFeedback }}>
        <div className="App Container">
            {view === 'login' && <Login onUserLoggedIn={handleUserLoggedIn} onRegisterLinkClicked={handleRegisterNavigation} />}
            {view === 'register' && <Register onUserRegistered={handleUserRegistered} onLoginLinkClicked={handleLoginNavigation} />}
            {view === 'home' && <Home onUserLoggedOut={handleUserLoggedOut} />}
            { feedback && <Feedback level={feedback.level} message={feedback.message} onTimeout={handleFeedbackTimeout} />}
        </div>
    </Context.Provider>
}