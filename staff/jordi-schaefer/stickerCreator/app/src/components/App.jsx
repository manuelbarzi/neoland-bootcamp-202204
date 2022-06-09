import { useState, useEffect } from 'react'
import Logger from '../vendor/Logger.js'
import Context from './Context'
import Feedback from './Feedback'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import '../styles/App.sass'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { isJwtValid } from '../validators'

function App () {

    const logger = new Logger('App')
    logger.info('call')

    // explicacion a las 11:50am viernes 13/05
    const [feedback, setFeedback] = useState(null) // el feedback es un objeto que tiene propiedades de tipo y mensajes
    const navigate = useNavigate()


    useEffect(() => {
        if (isJwtValid(sessionStorage.token))
            navigate('/')
        else
            handleUserLogout()
    }, [])

    const handleUserLogout = () => {
        delete sessionStorage.token

        handleLoginNavigation()
    }



    const handleUserRegistered = () => navigate('/login')
    const handleUserLoggedIn = () => navigate('/')

    const handleRegisterNavigation = () => navigate('/register')
    const handleLoginNavigation = () => navigate('/login')



    //handleFeedback sera la funcion que usaran todos los hijos
    const handleFeedback = feedback => setFeedback(feedback) // recibo el objeto feedback y lo guardo en el estado, al cambiar estado repintara

    const handleFeedbackTimeout = () => setFeedback(null)

    const handleOnDeletedUser = () => navigate('/login')

    logger.info('render')

    // Encierra todo esto en un context provider, el App va a proveer del contexto a los hijos, y cualquiera podra usarlo
    // le paso value al contexto
    return <Context.Provider value={{ handleFeedback }} >
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login onUserLoggedIn={handleUserLoggedIn} onRegisterLinkClicked={handleRegisterNavigation} />} />
                <Route path="/register" element={<Register onUserRegistered={handleUserRegistered} onLoginLinkClicked={handleLoginNavigation} />} />
                <Route path="/" element={<Home onUserLoggedOut={handleUserLogout} onDeletedUser={handleOnDeletedUser}/>} />
            </Routes>
            {/* si hay feedback pintamelo */}
            {feedback && <Feedback type={feedback.type} message={feedback.message} callback={handleFeedbackTimeout}/> } 
        </div>
    </Context.Provider>
}


export default App