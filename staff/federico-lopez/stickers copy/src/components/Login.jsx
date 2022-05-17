const { Component } = React

class Login extends Component {

    onFormSubmit = event => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        event.target.reset()

        authenticateUser(username, password, (error) => {
            if (error) {
                alert(error.message)

                return
            }
            sessionStorage.username = username

            this.props.onLoggedIn()
        })
    }

    onRegisterClick = event => {
        event.preventDefault()

        this.props.onRegisterNavigation()
    }

    render() {
        return <div className="LoginAndRegister">
            <form className="form" onSubmit={this.onFormSubmit}>
                <input className="input" type="text" name="username" placeholder="username" />
                <input className="input" type="password" name="password" placeholder="password" />
                <button className="button">Log in</button>
                <a href="#" className="button button__light" onClick={this.onRegisterClick}>Register</a>
            </form>
        </div>
    }
}