const {Component} = React

class Login extends Component {
    constructor(){
        super()

        this.logger = new Logger('Login')

        this.logger.info('constructor')
    }
    
    handleFormSubmit = event => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        authenticateUser(username, password, (error, token) => {
            if(error){
                alert(error.message)

                return
            }

            sessionStorage.token = token

            this.props.onUserLoggedIn()
        })
    }
    
    handleRegisterLinkClick = event => {
        event.preventDefault()

        this.props.onRegisterLinkClicked()
    }

    render() {
        this.logger.info('render')

        return <div>
            <form className="Container" onSubmit={this.handleFormSubmit}>
                <input className="Input Input--light" type="text" name="username" placeholder="username"/>
                <input className="Input Input--light" type="password" name="password" placeholder="password"/>
                <button className="Button Button--light">Login</button>
                <a href="#" onClick={this.handleRegisterLinkClick}>Register</a>
            </form>
        </div>
    }   
}