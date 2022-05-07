const {Component} = React

class App extends Component{
    state = {view: sessionStorage.username? 'home' : 'login' }

    handleUserRegistered = () => this.handleLoginNavigation()

    handleUserLoggedIn = () => this.setState({view: 'home'})
    
    handleLoginNavigation = () => this.setState({view: 'register'})

    handleLoginNavigation = () => this.setState({view: 'loigin'})

    handleUserLoggedOut = () => this.handleLoginNavigation()

    render() {
        return <div className='App'>
            {this.state.view === 'login' && <Login onUseLoggedI={this.handleUserLoggedIn} onRegisterLinkClicked={this.handleRegisterNavigantion} />}
            {this.state.view === 'register' && <Register onUseRegistered={this.handleUserRegistered} onLoginLinkClicked={this.handleLoginNavigantion} />}
            {this.state.view === 'home' && <Home onUseLoggedOut={this.handleUserLoggedOut} />}
            
        </div>
    }
}
