const { useState } = React

function App() {
    const logger = new Logger('App')

    logger.info('call')

    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')

    const handleUserRegistered = () => handleLoginNavigation()

    const handleUserLoggedIn = () => setView('home')

    const handleRegisterNavigation = () => setView('register')

    const handleLoginNavigation = () => setView('login')

    const handleUserLoggedOut = () => handleLoginNavigation()

    logger.info('render')

    return <div className="App">
        {view === 'login' && <Login onUserLoggedIn={handleUserLoggedIn} onRegisterLinkClicked={handleRegisterNavigation} />}
        {view === 'register' && <Register onUserRegistered={handleUserRegistered} onLoginLinkClicked={handleLoginNavigation} />}
        {view === 'home' && <Home onUserLoggedOut={handleUserLoggedOut} />}
    </div>
}