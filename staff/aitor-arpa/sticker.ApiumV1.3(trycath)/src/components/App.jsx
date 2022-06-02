const { useState  } = React

function App() {

    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')
    const [feedback, setFeedback] = useState(null)
    /* <  ---------      Manejador de Vistas  -----------  > */
    const handleUserRegistered = () => handleLoginNavigation()

    const handleUserLoggedIn = () => setView('home')

    const handleRegisterNavigation = () => setView('register')

    const handleLoginNavigation = () => setView('login')

    const handelUserLoggedOut = () => handleLoginNavigation()

    const handeleFeedback = feedback => setFeedeback(feedback)

    const handleFeedbackTimeout = () => setFeedback(null)
    



    /* <  ---------     Pintado con Condiciones para Mostrar Vistas   -----------  > */

    return <Context.Provider value={{ handeleFeedback }}>

    <div className="App">
        {view === 'login' && <Login onUserLoggedIn={handleUserLoggedIn} onRegisterLinkClicked={handleRegisterNavigation} />}
        {view === 'register' && <Register onUserRegistered={handleUserRegistered} onLoginLinkClicked={handleLoginNavigation} />}
        {view === 'home' && <Home onUserLoggedOut={handelUserLoggedOut}  />}
        { feedback && <Feedback level={feedback.level} message={feedback.message} onTimeout={handleFeedbackTimeout} />}
    </div>

    </Context.Provider> 

}


