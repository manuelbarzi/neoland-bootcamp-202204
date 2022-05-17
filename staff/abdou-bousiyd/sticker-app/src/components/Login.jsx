const { useState } = React

function Login(props) {
    // state = {error: null, alert: null}
    const [alert, setAlert] = useState(null)

    const handleFormSubmit = e => {
        e.preventDefault()

        const username = e.target.username.value
        const password = e.target.password.value

        authenticateUser(username, password, (error, token ) => {
            if (error) {
                setAlert(<Alert error message={error.message} />)
                setTimeout( () => {
                    setAlert(null)
                }, 4000 )
                return
            }
            sessionStorage.token = token


            props.onUserLoggedIn()
        })

    }

    const handleRegisterLinkClick = e => {
        e.preventDefault()
        props.onRegisterNavigation()
    }


    return <div>
        <form className="Container" onSubmit={handleFormSubmit}>
            {alert && alert}
            <input className="Input Input--light" type="text" name="username" placeholder="username" />
            <input className="Input Input--light" type="password" name="password" placeholder="password" />
            <button className="Button Button--light">Login</button >
            <a href="#" onClick={handleRegisterLinkClick}>Register</a>
        </form>
    </div>
}