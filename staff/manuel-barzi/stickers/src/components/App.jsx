const { Component } = React

class App extends Component {
    constructor() {
        super()

        this.state = { view: sessionStorage.token? 'home' : 'login' }

        logger.info('App - constructor')
    }
    //state = { view: sessionStorage.token? 'home' : 'login' }

    handleUserRegistered = () => this.handleLoginNavigation()

    handleUserLoggedIn = () => this.setState({ view: 'home' })

    handleRegisterNavigation = () => this.setState({ view: 'register' })

    handleLoginNavigation = () => this.setState({ view: 'login' })

    handleUserLoggedOut = () => this.handleLoginNavigation()

    render() {
        logger.info('App - render')
        
        return <div className="App">
            {this.state.view === 'login' && <Login onUserLoggedIn={this.handleUserLoggedIn} onRegisterLinkClicked={this.handleRegisterNavigation} />}
            {this.state.view === 'register' && <Register onUserRegistered={this.handleUserRegistered} onLoginLinkClicked={this.handleLoginNavigation} />}
            {this.state.view === 'home' && <Home onUserLoggedOut={this.handleUserLoggedOut} />}
        </div>
    }
}