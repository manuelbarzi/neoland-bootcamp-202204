import { useState } from 'react'
import Logger from '../vendor/Logger.js'
import Context from './Context'
import Feedback from './Feedback'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import '../styles/App.sass'


function App () {

    const logger = new Logger('App')
    logger.info('call')

    // explicacion a las 11:50am viernes 13/05
    const [view, setView] = useState(sessionStorage.token? 'home' : 'login')
    const [feedback, setFeedback] = useState(null) // el feedback es un objeto que tiene propiedades de tipo y mensajes

    const handleUserRegistered = () => setView('login')
    const handleUserLoggedIn = () => setView('home')

    const handleRegisterNavigation = () => setView('register')
    const handleLoginNavigation = () => setView('login')

    const handleUserLoggedOut = () => setView('login')


    //handleFeedback sera la funcion que usaran todos los hijos
    const handleFeedback = feedback => setFeedback(feedback) // recibo el objeto feedback y lo guardo en el estado, al cambiar estado repintara

    const handleFeedbackTimeout = () => setFeedback(null)

    const handleOnDeletedUser = () => setView('login')

    logger.info('render')

    // Encierra todo esto en un context provider, el App va a proveer del contexto a los hijos, y cualquiera podra usarlo
    // le paso value al contexto
    return <Context.Provider value={{ handleFeedback }} >
        <div className="App">

            {/* si hay feedback pintamelo */}
            {feedback && <Feedback type={feedback.type} message={feedback.message} callback={handleFeedbackTimeout}/> } 
            {view === 'login' && <Login onUserLoggedIn={handleUserLoggedIn} onRegisterLinkClicked={handleRegisterNavigation} />}
            {view === 'register' && <Register onUserRegistered={handleUserRegistered} onLoginLinkClicked={handleLoginNavigation} />}
            {view === 'home' && <Home onUserLoggedOut={handleUserLoggedOut} onDeletedUser={handleOnDeletedUser}/>}
        </div>
    </Context.Provider>
}


export default App