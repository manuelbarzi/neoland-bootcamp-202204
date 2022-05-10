const { Component } = React

class Register extends Component {

    handleLoginLinkClick = event => {
        event.preventDefault()
        //event.stopPropagation()

        this.props.onLoginLinkClicked()
    }

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


    render () {
        return <div className="Container">
            <form className="Container" onClick={this.handleFormSubmit}>
                <input className="form" type="text" name="name" placeholder=" Name"/>
                <input className="form" type="text" name="username" placeholder=" Username"/>
                <input className="form" type="password" name="password" placeholder=" Password"/>
                <button className="Button">Register</button>
            </form>
                <a href="#" onClick={this.handleLoginLinkClick}>Login</a>
        </div>
    }
}