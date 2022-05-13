const { useState } = React

function App () {
    // explicacion a las 11:50am viernes 13/05
    const [view, setView] = useState(sessionStorage.token? 'home' : 'login')

    const handleUserRegistered = () => setView('login')
    const handleUserLoggedIn = () => setView('home')

    const handleRegisterNavigation = () => setView('register')
    const handleLoginNavigation = () => setView('login')

    const handleUserLoggedOut = () => setView('login')


    return <div className="App">
        {view === 'login' && <Login onUserLoggedIn={handleUserLoggedIn} onRegisterLinkClicked={handleRegisterNavigation} />}
        {view === 'register' && <Register onUserRegistered={handleUserRegistered} onLoginLinkClicked={handleLoginNavigation} />}
        {view === 'home' && <Home onUserLoggedOut={handleUserLoggedOut} />}
    </div>
}