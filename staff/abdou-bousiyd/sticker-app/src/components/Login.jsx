const { Component } = React

class Login extends Component {

    state = {error: null, alert: null}

    handleFormSubmit = e => {
        e.preventDefault()

        const username = e.target.username.value
        const password = e.target.password.value

        authenticateUser(username, password, (error, token ) => {
            if (error) {
                this.setState({ alert : <Alert error message={error.message} />})
                setTimeout( () => {
                    this.setState({alert: null})
                }, 4000 )
                return
            }
            // sessionStorage.username = username
            sessionStorage.token = token


            this.props.onUserLoggedIn()
        })

    }

    handleRegisterLinkClick = e => {
        e.preventDefault()
        this.props.onRegisterNavigation()
    }

    render() {

        const {state: {alert}} = this

        return <div>
            <form className="Container" onSubmit={this.handleFormSubmit}>
                {alert && alert}
                <input className="Input Input--light" type="text" name="username" placeholder="username" />
                <input className="Input Input--light" type="password" name="password" placeholder="password" />
                <button className="Button Button--light">Login</button >
                <a href="#" onClick={this.handleRegisterLinkClick}>Register</a>
            </form>
        </div>
    }
}