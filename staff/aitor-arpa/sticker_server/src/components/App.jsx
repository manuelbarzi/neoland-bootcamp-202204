const { Component } = React

class App extends Component{
    // Declaro un estado con condicion que si hay sesionStorage abre Home si no Login 
    state = { view: sessionStorage.token? 'home' : 'login'}
    /* <  ---------      Manejador de Vistas  -----------  > */
    handleUserRegistered= () => this.handleLoginNavigation ()
    

    handleUserLoggedIn = () => this.setState({ view: 'home' })
 
    handleRegisterNavigation = () => this.setState({ view:'register' })

    handleLoginNavigation = () => this.setState({ view:'login' })
    
    handelUserLoggedOut = () => this.handleLoginNavigation()


    

    


    /* <  ---------     Pintado con Condiciones para Mostrar Vistas   -----------  > */
    render() {
        return  <div className="App">
            
            {this.state.view === 'login' && <Login onUserLoggedIn={this.handleUserLoggedIn} onRegisterLinkClicked={this.handleRegisterNavigation} />}
            {this.state.view === 'register' && <Register onUserRegistered={this.handleUserRegistered} onLoginLinkClicked={this.handleLoginNavigation} />}
            {this.state.view === 'home' && <Home  onUserLoggedOut={this.handelUserLoggedOut}  onUserGoProfile={this.handelUserProfile} onUserGoHome={this.handelUserGoHome}/>}
         
            </div>
    }
}

