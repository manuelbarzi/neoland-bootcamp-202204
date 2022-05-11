const { Component } = React

class App extends Component {
    state = { view: sessionStorage.username? 'home' : 'login' }

    handleLoggedIn = () => this.setState({ view: 'home' })

    handleNavToRegister = () => this.setState({ view: 'register' })

    handleOnUserRegistered = () => this.setState({ view: 'login' })

    handleNavToLogin = () => this.setState({ view: 'login' })

    handleOnLoggedOut = () => this.setState({ view: 'login' })

    render() {
        return <div className="App">
            {this.state.view === 'login' && <Login onLoggedIn={this.handleLoggedIn} onRegisterNavigation={this.handleNavToRegister} />}
            {this.state.view === 'register' && <Register onRegistered={this.handleOnUserRegistered} onLoginNavigation={this.handleNavToLogin} />}
            {this.state.view === 'home' && <Home onLoggedOut={this.handleOnLoggedOut} />}
        </div>
    }
}