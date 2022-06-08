import { useContext } from 'react'
import Context from './Context'
import Logger from '../vendor/Loggy'
import registerUser from '../logic/registerUser'

function Register (props) {

    const logger = new Logger('Register')
    logger.info('call')

    const { handleFeedback } = useContext(Context)

    const handleFormSubmit = event => { //el form nos pasa un callback en onSubmit. Se recogen los campos 
        event.preventDefault()

        const name = event.target.name.value
        const username = event.target.username.value
        const password = event.target.password.value

        try{
            registerUser(name, username, password, error => { //llamo a mi logica registerUser
                if (error) {
                    handleFeedback({ level: 'error', message: error.message })

                    return
                }
                                                //nos permite llegar a props de este componente
                props.onUserRegistered()  //cuando da bien llamamos a un callback cuando el usuario esta completamente registrado y nos entra por props (en este caso de app porque es donde esta register). avisará a app que ha entrado y puede cambiar de vista
            
            }) 
          
        }catch(error) {
            handleFeedback({ level: 'error', message: error.message })
        }                               //pinta el register pero no sabe que hacer cuando lo completamos hasta que no pasemos el callback de que no ha habido fallos a app. este nombre tiene que coincidir con el register en el render de app(linea 19)
    }

    const handleLoginLinkClick = event => { //han hecho click en ir a login
        event.preventDefault()
        props.onLoginLinkClicked()
    }

    logger.info('render')

    return <div>
        <form className="Container " onSubmit={handleFormSubmit}>
            <input className="Input Input--light" type="text" name="name" placeholder="name" />
            <input className="Input Input--light" type="text" name="username" placeholder="username" />
            <input className="Input Input--light" type="password" name="password" placeholder="password" />
            <input className="Input Input--light" type="text" name="adress" placeholder="adress" />
            <input className="Input Input--light" type="number" name="card number" placeholder="card number" />
    
            
            <button className="Button Button--light">Register</button>
            <a href="#" onClick={handleLoginLinkClick}>Login</a>
        </form>

        
    
    </div>


}

export default Register