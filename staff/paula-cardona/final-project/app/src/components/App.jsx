import { useState, useEffect } from 'react' //usamos useState porque App tiene estados y vistas. Te permiten usar estado y otras características de React sin escribir una clase.
import Logger from '../vendor/Loggy'
import AboutUs from './AboutUs'
import Context from './Context'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Feedback from './Feedback'
import './App.sass'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { isJwtValid } from '../validators'

function App (){ 
    
    const logger = new Logger('App') 
    logger.info('call')
  
    const navigate = useNavigate()
    const [feedback, setFeedback] = useState (null) 

    // useEffect(() => {
    //     if (isJwtValid(sessionStorage.token))
    //         navigate('/')
    //     else
    //         handleUserLogout()
    // }, [])

    const handleNextToLogin = () => navigate('/login')
    const handleUserRegistered = () => navigate ('/login')
    const handleLoginLinkClicked =() => navigate ('/login')
    const handleRegisterLinkClicked = () => navigate ('/register')
    const handleUserLoggedIn = () => navigate('/')
  

    const handleUserLogout = () => {
        delete sessionStorage.token
        handleLoginLinkClicked()
    }

    const handleFeedback = feedback => setFeedback (feedback) 
    const handleFeedbackTimeout = () => setFeedback (null) 





    logger.info('render')
                                //al value le pasamos un objeto que tiene un propiedad que es la funcio de handlefeedback
    return <Context.Provider value={{handleFeedback}}> {/*app va hacer de provedor de contexto a todos sus hijos, por eso le pasamos aquí el componente Context con su provider ya que es una caracteristica de context. debemos decidir que queremos pasarle a todos*/}
        <div className="App Container">
            <Routes>
                <Route path="/AboutUs" element={<AboutUs onNextArrow={handleNextToLogin}/>} />  
                <Route path="/login" element={<Login onUserLoggedIn={handleUserLoggedIn} onRegisterLinkClicked= {handleRegisterLinkClicked} />} />
                <Route path="/register" element={<Register onUserRegistered={handleUserRegistered} onLoginLinkClicked={handleLoginLinkClicked} />} />
                <Route path="/" element={<Home onUserLogout={handleUserLogout}/>} />     
            </Routes>
            {feedback && <Feedback level={feedback.level} message= {feedback.message} onTimeout = {handleFeedbackTimeout} />} {/*si hay feedback dame feedback y lo pinto y te voy a pasar la propiedad level del feedback que es un objeto y la propiedad message del feedback que tmbien es un objeto. (como objeto y el message (como objeto)*/}
        </div>
    </Context.Provider>
}

export default App


