const { Component } = React

class Login extends Component {

    handleFormSubmit = e => {
        e.preventDefault()

        const username = e.target.username.value
        const password = e.target.password.value

        authenticateUser(username, password, error => {
            if (error) {
                alert(error.message)

                return
            }
            sessionStorage.username = username

            this.props.onUserLoggedIn()
        })

    }

    handleRegisterLinkClick = e => {
        e.preventDefault()
        this.props.onRegisterNavigation()
    }

    render() {
        return <div>
            <form className="Container" onSubmit={this.handleFormSubmit}>
                <input className="Input Input--light" type="text" name="username" placeholder="username" />
                <input className="Input Input--light" type="password" name="password" placeholder="password" />
                <button className="Button Button--light">Login</button >
                <a href="#" onClick={this.handleRegisterLinkClick}>Register</a>
            </form>
        </div>
    }
}