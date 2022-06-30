import { useState } from 'react'
import { authenticateUser } from '../logic/'
import Alert from "./Alert"
import './Auth.sass'

function Login(props) {
    const [alert, setAlert] = useState(null)

    const handleFormSubmit = e => {
        e.preventDefault()

        const username = e.target.username.value
        const password = e.target.password.value

        try{
            authenticateUser(username, password)
                .then(token => {
                    sessionStorage.token = token
                    props.onUserLoggedIn()
                })
                .catch((error) => {
                    if (error) {
                        setAlert(<Alert error message={error.message} />)
                        setTimeout( () => {
                            setAlert(null)
                        }, 4000 )
                        return
                    }
                })

        }catch(error) {
            if (error) {
                setAlert(<Alert error message={error.message} />)
                setTimeout( () => {
                    setAlert(null)
                }, 4000 )
                return
            }
        }

        
    }

    const handleRegisterLinkClick = e => {
        e.preventDefault()
        props.onRegisterNavigation()
    }


    return <div className="Auth">
        <form className="form" onSubmit={handleFormSubmit}>
            {alert && alert}
            <input className="input" type="text" name="username" placeholder="username" />
            <input className="input" type="password" name="password" placeholder="password" />
            <button className="button">Login</button >
            <a href="#" className="button" onClick={handleRegisterLinkClick}>Register</a>
        </form>
    </div>
}

export default Login;