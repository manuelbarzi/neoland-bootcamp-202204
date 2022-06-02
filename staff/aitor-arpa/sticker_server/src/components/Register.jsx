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

            this.props.onUserRegistered()
        })
    }

    handleLoginLinkClick = event => {
        event.preventDefault()

        this.props.onLoginLinkClicked()
    }

    render() {
        return <div className="login-box">
            <form className="Container" onSubmit={this.handleFormSubmit}>
                <div className="user-box">
                <input className="Input Input--light" type="text" name="name"  />
                <label>name</label>
                </div>
                <div className="user-box">
                <input className="Input Input--light" type="text" name="username"/>
                <label>Username</label>
                </div>
                <div className="user-box">
                <input className="Input Input--light" type="password" name="password"  />
                <label>Password</label>
                </div>
                <div className="user-box">
                <button className="Button Button--light Btn-ani"> Go Register</button>
                </div>
                    
                <a href="#" onClick={this.handleLoginLinkClick}>Login</a>
            </form>
        </div>
    }
}