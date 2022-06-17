import { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import Logger from 'vendor/Loggy'
import Context from '../components/Context'
import authenticateUser from '../logic/authenticateUser'
import { isJwtValid } from 'validators'

function Login(props) {
    const logger = new Logger('Login')

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (isJwtValid(sessionStorage.token)) {
            // navigate to Home
        } else {
            setIsLoading(false)
        }
    }, [])

    logger.info('call')

    const { handleFeedback } = useContext(Context)

    const handleFormSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password)
                .then(token => {
                    sessionStorage.token = token

                    props.onUserLoggedIn()

                })
                .catch(error => handleFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            handleFeedback({ level: 'error', message: error.message })
        }
    }

    logger.info('render')

    return <div>
        <form className="Container" onSubmit={handleFormSubmit}>
            <input className="Input Input--light" type="text" name="email" placeholder="email" />
            <input className="Input Input--light" type="password" name="password" placeholder="password" />
            <button className="Button Button--light">Login</button>
            <Link href='/register'><a>Register</a></Link>
        </form>
    </div>
}

export default Login