const { useState, useContext } = React

function App() {

    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')
    const [feedeback, setFeedeback] = useState({ level: 'error', message: '' })
    /* <  ---------      Manejador de Vistas  -----------  > */
    const handleUserRegistered = () => handleLoginNavigation()

    const handleUserLoggedIn = () => setView('home')

    const handleRegisterNavigation = () => setView('register')

    const handleLoginNavigation = () => setView('login')

    const handelUserLoggedOut = () => handleLoginNavigation()

    const handleFeedback = feedback => setFeedback(feedback)

    const handleFeedbackTiemout = () => setFeedback(null)

    const handeleFeedback = message => alert(message)



    /* <  ---------     Pintado con Condiciones para Mostrar Vistas   -----------  > */

    return <Context.Provider value={{ handeleFeedback }}>

    <div className="App">
        {view === 'login' && <Login onUserLoggedIn={handleUserLoggedIn} onRegisterLinkClicked={handleRegisterNavigation} />}
        {view === 'register' && <Register onUserRegistered={handleUserRegistered} onLoginLinkClicked={handleLoginNavigation} />}
        {view === 'home' && <Home onUserLoggedOut={handelUserLoggedOut}  />}

    </div>

    </Context.Provider> 

}


