const { Component } = React

class Login extends Component {

    handleFormSubmit = event => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        authenticateUser(username, password, (error, token) => {
            if (error) {
                alert(error.message)
                return
            }
    
            sessionStorage.token = token
            // la callback son los props de la app
            this.props.onUserLoggedIn()
        })
    }

    handleRegisterLinkClick = event => {
        event.preventDefault()
        this.props.onRegisterLinkClicked()
    }
    

    render () {
        return <div className="Container">
            <form className="Container" onSubmit={this.handleFormSubmit}>
                <input className="form" type="text" name="username" placeholder=" Username"/>
                <input className="form" type="password" name="password" placeholder=" Password"/>
                <button className="Button">Login</button>
            </form>
                <a href="#" onClick={this.handleRegisterLinkClick}>Register</a>
        </div>
    }
}