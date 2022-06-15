import { FormLogin, Logo } from '../components'
import { Link, useNavigate } from 'react-router-dom'
import './RegisterPage.sass'
import { authenticateUser } from './../logic'

export const LoginPage = () => {

    const navigate = useNavigate()


    const handleFormSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password)
                .then(token => {
                    sessionStorage.token = token

                    navigate('/')

                })
            .catch(error => {
                // handleFeedback({ level: 'error', message: error.message })
                alert(error)
            })
        } catch (error) {
            // handleFeedback({ level: 'error', message: error.message })
            alert(error)
        }
    }

    return <section className='Register-page'>

        <Logo />
        <FormLogin onSubmit={handleFormSubmit} />
        <Link to="/register" className='Link'>
            register
        </Link>

    </section>



}

/*return isJwtValid(sessionStorage.token) ? <></>: <div> 
        <form className="Container" onSubmit={handleFormSubmit}>
            <input className="Input Input--light" type="text" name="email" placeholder="email" />
            <input className="Input Input--light" type="password" name="password" placeholder="password" />
            <button className="Button Button--light">Login</button>
            <a href="#" onClick={handleRegisterLinkClick}>Register</a>
        </form>
    </div> */
