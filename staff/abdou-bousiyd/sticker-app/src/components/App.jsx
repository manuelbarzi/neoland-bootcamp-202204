// const { Component } = React 
const { useState } = React

function App() {

    // state = {view: sessionStorage.token ? 'home' : 'login'}
    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')

    const handleUserLoggedIn = () => setView('home')
    const handleUserLoggedOut = () => setView('login')
    const handleRegisterNavigation = () => setView('register')
    const handleProfileNavigation = () => setView('profile')
    // handleChangeName = () => this.setState({view: 'changeName'})


    return <div className="App">
        {view === 'login' && <Login onUserLoggedIn={handleUserLoggedIn} onRegisterNavigation={handleRegisterNavigation} />}
        {view === 'home' && <Home onUserLoggedOut={handleUserLoggedOut} onProfileNavigation={handleProfileNavigation}/>}
        {view === 'register' && <Register onUserLoggedOut={handleUserLoggedOut} />}
    </div>
}