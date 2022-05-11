const { Component } = React

class App extends Component {
    constructor() {
        super()
    
        this.state = { view: sessionStorage.token? 'home' : 'login' }
    
        this.logger = new Logger('App')
    
        this.logger.info('constructor')
    }

   // state = { view: sessionStorage.username? 'home' : 'login' }  //hay sesion storage? es decir usuario guardado, entonces dame home, sino dame login

    handleUserRegistered = () => this.handleLoginNavigation() //si se ha registrado llamame a lo mismo que hace handleloginnavigation, es decir cambiar la view a login

    handleUserLoggedIn = () => this.setState({ view: 'home' })

    handleRegisterNavigation = () => this.setState({ view: 'register' })

    handleLoginNavigation = () => this.setState({ view: 'login' })

    handleUserLoggedOut = () => this.handleLoginNavigation() //cuando en home de logout, vuelve a login

    



    render() {   //el RENDER ES OBLIGATORIO
        this.logger.info('render')
        return <div className="App">
            {this.state.view === 'login' && <Login onUserLoggedIn={this.handleUserLoggedIn} onRegisterLinkClicked={this.handleRegisterNavigation} />}
            {this.state.view === 'register' && <Register onUserRegistered={this.handleUserRegistered} onLoginLinkClicked={this.handleLoginNavigation} />} 
            {this.state.view === 'home' && <Home onUserLoggedOut={this.handleUserLoggedOut}/>}   
        </div>
    }
}
//onuserregistered: cuando el usuario se haya registrado llama a la callback(handleuserregisteres, que hará la logica de arriba de apagar y encender vistas)
//<Login onUserLoggedIn={this.handleUserLoggedIn} significa que cuando un usuario en login se logee, maneja la situacion del usuario logeado
/*la primera es para enviar el formulario en cada pantalla es decir
si estoy en register, me registro
si estoy en login, me logeo,
la segunda callback es para los link y cambiar de login a register i de register a login*/