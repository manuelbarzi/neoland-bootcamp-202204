const { Component } = React


class Login extends Component {
    state= { view: 'login' }

    handleFormSubmit = event => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        authenticateUser(username, password, (error, token) =>  {  //mi logica no falla porque antes hemos hecho un test para comprobarla. token lo he conseguido con el authenticate i lo guardaré en la sessionstorage
            if (error) {
                alert(error.message)

                return
            }

            sessionStorage.token = token
            
            this.props.onUserLoggedIn()
        })

    }

    handleRegisterLinkClick = event => {
        event.preventDefault()

        this.props.onRegisterLinkClicked()//callback que se encarga de decirle a app que me apague login i me encienda register
    }
   
    render() {   //return devuelve el template que queremos pintar
        return <div> 
            <h1 className="h1"> STICKER CREATOR </h1>
            <form className="Container" onSubmit={this.handleFormSubmit}>
                <input className="Input Input--light" type="text" name="username" placeholder="username"/>
                <input className="Input Input--light" type="password" name="password" placeholder="password"/>
                <button className="Button Button--light">Login</button>
                <a href="#"onClick={this.handleRegisterLinkClick}>Register</a>
            </form>
        </div>

    }
}


