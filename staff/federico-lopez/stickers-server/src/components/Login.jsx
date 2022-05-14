const { useContext } = React

function Login(props) {
    const { handleFeedback } = useContext(Context)

    const onFormSubmit = event => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        event.target.reset()
        
        try {
            authenticateUser(username, password, (error, token) => {
                if (error) {
                    handleFeedback(error.message)
                    
                    return
                }
                sessionStorage.token = token
                
                handleFeedback('successfully logged in', 'succeed')

                props.onLoggedIn()
            })
        } catch(error) {
            handleFeedback(error.message)
        }
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