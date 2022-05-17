const { Component } = React

class Register extends Component {
    handleFormSubmit = event => { //el form nos pasa un callback en onSubmit. Se recogen los campos 
        event.preventDefault()

        const name = event.target.name.value
        const username = event.target.username.value
        const password = event.target.password.value

        registerUser(name, username, password, error => { //llamo a mi logica del callback del form
            if (error) {
                alert(error.message)

                return
            }
                                            //nos permite llegar a props de este componente
            this.props.onUserRegistered()  //cuando da bien llamamos a un callback cuando el usuario esta completamente registrado y nos entra por props (en este caso de app porque es donde esta register). avisará a app que ha entrado y puede cambiar de vista
        })                                  //pinta el register pero no sabe que hacer cuando lo completamos hasta que no pasemos el callback de que no ha habido fallos a app. este nombre tiene que coincidir con el register en el render de app(linea 19)
    }

    handleLoginLinkClick = event => { //han hecho click en ir a login
        event.preventDefault()

        this.props.onLoginLinkClicked()
    }

    render() {
        return <div>
            <form className="Container" onSubmit={this.handleFormSubmit}>
                <input className="Input Input--light" type="text" name="name" placeholder="name" />
                <input className="Input Input--light" type="text" name="username" placeholder="username" />
                <input className="Input Input--light" type="password" name="password" placeholder="password" />
                <button className="Button Button--light">Register</button>
                <a href="#" onClick={this.handleLoginLinkClick}>Login</a>
            </form>
        </div>
    }
}