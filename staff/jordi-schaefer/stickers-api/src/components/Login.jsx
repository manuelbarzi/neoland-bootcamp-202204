function Login (props) {

    const handleFormSubmit = event => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        try {
            authenticateUser(username, password, (error, token) => {
                if (error) {
                    alert(error.message)
                    return
                }
        
                sessionStorage.token = token
                // la callback son los props de la app
                props.onUserLoggedIn()
            })
        } catch(error) {
            alert(error.message)
        }
    }

    const handleRegisterLinkClick = event => {
        event.preventDefault()
        props.onRegisterLinkClicked()
    }
    

    return <div className="Container">
        <form className="Container" onSubmit={handleFormSubmit}>
            <input className="form" type="text" name="username" placeholder=" Username"/>
            <input className="form" type="password" name="password" placeholder=" Password"/>
            <button className="Button">Login</button>
        </form>
            <a href="#" onClick={handleRegisterLinkClick}>Register</a>
    </div>
}