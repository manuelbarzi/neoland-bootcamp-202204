const {Component} = React

class App extends Component{
    state = {view: sessionStorage.username? 'home' : 'login' }

    handleUserRegistered = () => this.handleLoginNavigation()

    handleUserLoggedIn = () => this.setState({view: 'home'})
    
    handleRegisterNavigation = () => this.setState({view: 'register'})

    handleLoginNavigation = () => this.setState({view: 'login'})

    handleUserLoggedOut = () => this.handleLoginNavigation()

    handleUserProfileIn = () => this.handleProfileNavigation()

    render() {
        return <div className="App">
            {this.state.view === 'login' && <Login onUserLoggedIn={this.handleUserLoggedIn} onRegisterLinkClicked={this.handleRegisterNavigation} />}
            {this.state.view === 'register' && <Register onUserRegistered={this.handleUserRegistered} onLoginLinkClicked={this.handleLoginNavigation} />}
            {this.state.view === 'home' && <Home onUserLoggedOut={this.handleUserLoggedOut} />}
            {this.state.view === 'home' && <Profile onUserProfileIn={this.handleUserProfileIn} />}
        </div>
    }
}
