const { Component } = React

// class App extends Component {
//     constructor() {
//         super(`<div class="App"></div>`)
//     }
// }

class App extends Component {
    state = { view: sessionStorag.username? 'home' : 'login'}

    handleUserRegistered(){
        alert('User registered')
    }

    handleUserLoggedIn(){
        alert('User logged In')
    }

    handleRegisterNavigation = () => {
        this.setState({ view: 'register'})  
    }

    handleLogiNavigation = () => this.setState({ view: 'login'})

    render() {
        return <div className="App">
            {this.state.view === 'login' && <Login onUserLoggedIn={this.handleUserLoggedIn} onRegisterLinkClicked={this.handleRegisterNavigation} />}
            {this.state.view === 'register' && <Register onUserRegistered={this.handleUserRegistered} onLoginLinkClicked={this.handleLoginNavigation}/>}
        </div>
    }
}

