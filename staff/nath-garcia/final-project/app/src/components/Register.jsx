import { useContext } from 'react'
import Logger from '../vendor/Loggy'
import Context from './Context'
import registerUser from '../logic/registerUser'
import { isJwtValid } from '../validators'
import { Link, useNavigate } from 'react-router-dom'


function Register(props) {
    const logger = new Logger('Register')

    const navigate = useNavigate()
    const { handleFeedback } = useContext(Context)

    logger.info('call')

    const handleFormSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value
        const surname = event.target.surname.value
        const username = event.target.username.value
        const email = event.target.email.value
        const phone = event.target.phone.value
        const password = event.target.password.value;
            (async () => {
                try {
                    await registerUser(name, surname, username, email, phone, password)
                    navigate('/login')
                } catch (error) {
                    handleFeedback({ level: 'error', message: error.message })
                }
            })();
    }

    logger.info('render')

    return isJwtValid(sessionStorage.token) ? <></> : <div>
        <form className="Container" onSubmit={handleFormSubmit}>
            <input className="Input Input--light" type="text" name="name" placeholder="name" />
            <input className="Input Input--light" type="text" name="surname" placeholder="surname" />
            <input className="Input Input--light" type="text" name="username" placeholder="username" />
            <input className="Input Input--light" type="email" name="email" placeholder="email" />
            <input className="Input Input--light" type="number" name="phone" placeholder="phone" />
            <input className="Input Input--light" type="password" name="password" placeholder="password" />
            <button className="Button Button--light">Register</button>
            <Link className="Button Link" to="/login">Login</Link>
        </form>
    </div>
}

export default Register























// const foo = async (name, surname, username, email, phone, password) => {
//     try {
//         await registerUser(name, surname, username, email, phone, password)

//         navigate('/login')

//     } catch(error) {
//         handleFeedback({ level: 'error', message: error.message })
//     }
// }

// const handleFormSubmit = event => {
//     event.preventDefault()
//     const name = event.target.name.value
//     const surname = event.target.surname.value
//     const username = event.target.username.value
//     const email = event.target.email.value
//     const phone = event.target.phone.value
//     const password = event.target.password.value
//     foo(name, surname, username, email, phone, password)
// }