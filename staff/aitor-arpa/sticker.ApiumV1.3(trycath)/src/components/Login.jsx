const { useContext } = React

function Login(props) {

    const { handleFeedeback } = useContext(Context)
    
    const handleFormSubmit = event => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        authenticateUser(username, password, (error, token) => {
            if (error) {
                handleFeedeback(error.message)

                return
            }

            sessionStorage.token = token

            props.onUserLoggedIn()

        })
    }

    const handleRegisterLinkClick = event => {
        event.preventDefault()

        props.onRegisterLinkClicked()
    }

    return <div className="login-box">
        <form className="Container" onSubmit={handleFormSubmit}>
            <div className="user-box">
                <input className="Input Input--light" type="text" name="username" />
                <label>Username</label>
            </div>
            <div className="user-box">
                <input className="Input Input--light" type="password" name="password" />
                <label>Password</label>
            </div>
            <div className="user-box">
                <button className="Button Btn-ani Button--light">Login</button>

            </div>
            <a href="#" onClick={handleRegisterLinkClick}>Go Register</a>
        </form>
    </div>
}
