function Login(props) {
    const logger = new Logger('Login')

    logger.info('call')


    const handleFormSubmit = event => {
        event.preventDefault()

        // const username = event.target.username.value
        // const password = event.target.password.value
        const { target: { username: { value: username }, password: { value: password } } } = event

        authenticateUser(username, password, (error, token) => {
            if (error) {
                alert(error.message)

                return
            }

            sessionStorage.token = token //guardar sesion

            props.onUserLoggedIn()
        })
    }

    const handleRegisterLinkClick = event => {
        event.preventDefault()

        props.onRegisterLinkClicked()
    }

    logger.info('render')

    return <div className="Signin">
        <form className="Login Container" onSubmit={handleFormSubmit}>
            <input className="Input Input--light" type="text" name="username" placeholder="username" />
            <input className="Input Input--light" type="password" name="password" placeholder="password" />
            <button className="Button Button--light">Login</button>
            <a href="#" onClick={handleRegisterLinkClick}>Register</a>
        </form>
    </div>

}


