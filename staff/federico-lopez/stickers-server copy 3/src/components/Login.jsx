function Login(props) {

    const onFormSubmit = event => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        event.target.reset()
        
        authenticateUser(username, password, (error, token) => {
            if (error) {
                alert(error.message)
                
                return
            }
            sessionStorage.token = token
            
            props.onLoggedIn()
        })
    }

    const onRegisterClick = event => {
        event.preventDefault()

        props.onRegisterNavigation()
    }

    return <div className="LoginAndRegister">
            <form className="form" onSubmit={onFormSubmit}>
                <input className="input" type="text" name="username" placeholder="username" />
                <input className="input" type="password" name="password" placeholder="password" />
                <button className="button">Log in</button>
                <a href="#" className="button button__light" onClick={onRegisterClick}>Register</a>
            </form>
        </div>
}