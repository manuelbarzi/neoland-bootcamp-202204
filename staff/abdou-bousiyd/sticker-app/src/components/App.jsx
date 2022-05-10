const { Component } = React 

class App extends Component {

    // state = {view: sessionStorage.username ? 'profile' : 'login'}
    state = {view: sessionStorage.username ? 'home' : 'login'}

    handleUserLoggedIn = () => this.setState({view: 'home'})
    handleUserLoggedOut = () => this.setState({view: 'login'})
    handleRegisterNavigation = () => this.setState({view: 'register'})
    handleProfileNavigation = () => this.setState({view: 'profile'})
    // handleChangeName = () => this.setState({view: 'changeName'})


    render() {
        return <div className="App">
            {this.state.view === 'login' && <Login onUserLoggedIn={this.handleUserLoggedIn} onRegisterNavigation={this.handleRegisterNavigation} />}
            {this.state.view === 'home' && <Home onUserLoggedOut={this.handleUserLoggedOut} onProfileNavigation={this.handleProfileNavigation}/>}
            {this.state.view === 'register' && <Register onUserLoggedOut={this.handleUserLoggedOut} />}
            {/* {this.state.view === 'profile' && <Profile onChangeName={this.handleChangeName} />} */}
            {/* {this.state.view === 'changeName' && <ChangeName />} */}

        </div>
    }
    
}