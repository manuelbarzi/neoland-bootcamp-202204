import { useState, useEffect } from 'react' //usamos useState porque App tiene estados y vistas. Te permiten usar estado y otras características de React sin escribir una clase.
import Context from './Context'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Feedback from './Feedback'
import Intro from './Intro'
import './App.sass'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { isJwtValid } from '../validators'

function App (){ //función de app
    
    const navigate = useNavigate()
    const [feedback, setFeedback] = useState (null) //de feedback tendrá 2 propiedades: nivel y message.

    useEffect(() => {
        if (isJwtValid(sessionStorage.token))
            navigate('/')
        else
            navigate ('/intro')
    }, [])

    const handleUserRegistered = () => handleLoginNavigation() //si se ha registrado llamame a lo mismo que hace handleloginnavigation, es decir cambiar la view a login o setView ('login')

    const handleSiguienteClicked = () => navigate ('/login')

    const handleUserLoggedIn = () => navigate ('/') 

    const handleRegisterNavigation = () => navigate ('/register')

    const handleLoginNavigation = () => navigate ('/login')

    const handleUserLogout = () => {
        delete sessionStorage.token

        handleLoginNavigation()
    } 
 
     //const handleFeedback = message => confirm(message)
    const handleFeedback = feedback => setFeedback (feedback) //app decide mostrarlo en vez de alert, feedback (toast)
    
    const handleFeedbackTimeout = () => setFeedback (null) //apagado


    
                                //al value le pasamos un objeto que tiene un propiedad que es la funcio de handlefeedback
    return <Context.Provider value={{handleFeedback}}> {/*app va hacer de provedor de contexto a todos sus hijos, por eso le pasamos aquí el componente Context con su provider ya que es una caracteristica de context. debemos decidir que queremos pasarle a todos*/}
        <div className="App Container">
            <Routes>
                <Route path="/intro" element={<Intro onSiguienteClicked={handleSiguienteClicked} />} />
                <Route path="/login" element={<Login onUserLoggedIn={handleUserLoggedIn} onRegisterLinkClicked={handleRegisterNavigation} />} />
                <Route path="/register" element={<Register onUserRegistered={handleUserRegistered} onLoginLinkClicked={handleLoginNavigation} />} />
                <Route path="/" element={<Home onUserLoggedOut={handleUserLogout}/>} />
            </Routes> 
            {feedback && <Feedback level={feedback.level} message= {feedback.message} onTimeout = {handleFeedbackTimeout} />} {/*si hay feedback dame feedback y lo pinto y te voy a pasar la propiedad level del feedback que es un objeto y la propiedad message del feedback que tmbien es un objeto. (como objeto y el message (como objeto)*/}
        </div>
    </Context.Provider>
}

export default App
