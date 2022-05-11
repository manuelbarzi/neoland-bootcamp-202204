const { Component } = React

class Register extends Component {

    handleFormSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value
        const username = event.target.username.value
        const password = event.target.password.value

        registerUser(name, username, password, error => {
            if (error) {
                alert(error.message)
    
                return
            }
            this.props.onRegistered()
        })
    }

    onLoginClick = event => {
        event.preventDefault()

        this.props.onLoginNavigation()
    }

    render() {
        return <div className="LoginAndRegister">
            <form className="form" onSubmit={this.handleFormSubmit}>
                <input className="input" type="text" name="name" placeholder="name" />
                <input className="input" type="text" name="username" placeholder="username" />
                <input className="input" type="password" name="password" placeholder="password" />
                <button className="button">Register</button>
                <a className="button button__light" href="#" onClick={this.onLoginClick}>Login</a>
            </form>
        </div>
    }
}