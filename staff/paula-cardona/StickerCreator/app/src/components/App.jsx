import { useState, useEffect } from 'react' //usamos useState porque App tiene estados y vistas. Te permiten usar estado y otras características de React sin escribir una clase.
import Logger from '../vendor/Loggy'
import Context from './Context'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Feedback from './Feedback'
import './App.sass'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { isJwtValid } from '../validators'

function App (){ //función de app
    
    const logger = new Logger('App') //constructor para seguir el orden en el que suceden las cosas
    logger.info('call')
  
    //declaramos una variable de estado la cual llamaremos view. usestate me devuelve un array con 2 cosas: 1 estado actual view i 1 seter para cambiar la view(una función setview)
    const navigate = useNavigate()
    const [feedback, setFeedback] = useState (null) //de feedback tendrá 2 propiedades: nivel y message.

    useEffect(() => {
        if (isJwtValid(sessionStorage.token))
            navigate('/')
        else
            handleUserLogout()
    }, [])

    const handleUserRegistered = () => handleLoginNavigation() //si se ha registrado llamame a lo mismo que hace handleloginnavigation, es decir cambiar la view a login o setView ('login')

    const handleUserLoggedIn = () => navigate ('/') 

    const handleRegisterNavigation = () => navigate('/login')

    const handleLoginNavigation = () => navigate('/login')

    const handleUserLogout = () => {
        delete sessionStorage.token
        handleLoginNavigation() //cuando en home de logout, vuelve a login
    }
    
    const handleFeedback = feedback => setFeedback (feedback) //app decide mostrarlo en vez de alert, feedback (toast)
    
    const handleFeedbackTimeout = () => setFeedback (null) //apagado


    logger.info('render')
                                //al value le pasamos un objeto que tiene un propiedad que es la funcio de handlefeedback
    return <Context.Provider value={{handleFeedback}}> {/*app va hacer de provedor de contexto a todos sus hijos, por eso le pasamos aquí el componente Context con su provider ya que es una caracteristica de context. debemos decidir que queremos pasarle a todos*/}
        <div className="App Container">
        <Routes>
            <Route path="/login" element={<Login onUserLoggedIn={handleUserLoggedIn} onRegisterLinkClicked={handleRegisterNavigation} />} />
            <Route path="/register" element={<Register onUserRegistered={handleUserRegistered} onLoginLinkClicked={handleLoginNavigation} />} />
            <Route path="/" element={<Home onUserLoggedOut={handleUserLogOut}/>} />
        </Routes>
            {feedback && <Feedback level={feedback.level} message= {feedback.message} onTimeout = {handleFeedbackTimeout} />} {/*si hay feedback dame feedback y lo pinto y te voy a pasar la propiedad level del feedback que es un objeto y la propiedad message del feedback que tmbien es un objeto. (como objeto y el message (como objeto)*/}
        </div>
    </Context.Provider>
}

export default App


//-----------NOTES---------------
//quitamos todos los this, la funcion constructora y el render, todo const
//onuserregistered: cuando el usuario se haya registrado llama a la callback(handleuserregisteres, que hará la logica de arriba de apagar y encender vistas)
//<//Login onUserLoggedIn={{this.handleUserLoggedIn} significa que cuando un usuario en login se logee, maneja la situacion del usuario logeado
/*la primera es para enviar el formulario en cada pantalla es decir
si estoy en register, me registro
si estoy en login, me logeo,
la segunda callback es para los link y cambiar de login a register i de register a login*/