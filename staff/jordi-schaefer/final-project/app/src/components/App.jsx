import { useState, useEffect } from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { isJwtValid } from 'validators'
//import Logger from 'loggy'
import Context from './Context'
import Feedback from './Feedback'
import Welcome from './Welcome'
import Login from './Login'
import Register from './Register'
import Home from './dashboard/Home'
import Activity from './activity/Activity'
import '../styles/App.sass'

function App () {

    //const logger = new Logger('App')
    //logger.info('call')

    // explicacion a las 11:50am viernes 13/05
    const [feedback, setFeedback] = useState(null) // el feedback es un objeto que tiene propiedades de tipo y mensajes
    const navigate = useNavigate()

    useEffect(() => {
        if (isJwtValid(sessionStorage.token))
            navigate('/dashboard')
        else
            handleUserLogout()
    }, [])

    const handleUserLogout = () => {
        delete sessionStorage.token

        handleWelcomeNavigation()
    }
    
    const handleWelcomeNavigation = () => navigate('/')
    const handleLoginNavigation = () => navigate('/login')
    const handleRegisterNavigation = () => navigate('/register')
    
    const handleUserLoggedIn = () => navigate('/dashboard')


    //handleFeedback sera la funcion que usaran todos los hijos
    const handleFeedback = feedback => { 
        setFeedback(feedback) } // recibo el objeto feedback y lo guardo en el estado, al cambiar estado repintara

    const handleFeedbackTimeout = () => setFeedback(null)
    const handleOnDeletedUser = () => navigate('/')


    // Encierra todo esto en un context provider, el App va a proveer del contexto a los hijos, y cualquiera podra usarlo
    // le paso value al contexto
    return <Context.Provider value={{ handleFeedback }} >
        <div className="App">
            <Routes>
                <Route path="/" element={<Welcome onLoginLinkClicked={handleLoginNavigation} onRegisterLinkClicked={handleRegisterNavigation} />} />
                <Route path="/login" element={<Login onUserLoggedIn={handleUserLoggedIn} onWelcomeLinkClicked={handleWelcomeNavigation} />} />
                <Route path="/register" element={<Register onUserLoggedIn={handleUserLoggedIn} onWelcomeLinkClicked={handleWelcomeNavigation} />} />
                <Route path="/dashboard" element={<Home onUserLoggedOut={handleUserLogout} onDeletedUser={handleOnDeletedUser}/>} />
                <Route path="/activity" element={<Activity />} />
            </Routes>
            {/* si hay feedback pintamelo */}
            {feedback && <Feedback type={feedback.type} message={feedback.message} callback={handleFeedbackTimeout}/> } 
        </div>
    </Context.Provider>
}


export default App