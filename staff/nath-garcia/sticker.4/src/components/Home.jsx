const { Component } = React

class Home extends Component {
    state = { name: null, timestamp: null, view: 'list' }

    handleLogoutClick = () => {
        delete sessionStorage.token

        this.props.onUserLoggedOut()
    }

    componentDidMount() {
        retrieveUser(sessionStorage.token, (error, user) => {
            if (error) {
                alert(error.message)

                return
            }

            this.setState({ name: user.name })
        })
    }

    handleAddClick = () => {
        saveNote(sessionStorage.token, null, null, error => {
            if (error) {
                alert(error.message)

                return
            }

            this.setState({ timestamp: Date.now() })
        })
    }

    handleProfileClick = () => this.setState({ view: 'profile' })

    handleHomeClick = () => this.setState({ view: 'list' })

    render() {
        return <div className="Home Container">
            <header className="Home__header Container Container--row Container--spread-sides">
                <button className="Button Button--no-border Home__home" onClick={this.handleHomeClick}>📋</button>
                <div>
                    <button className="Button Button--no-border Home__profile" onClick={this.handleProfileClick}>{this.state.name}</button>
                    <button className="Button Button--no-border Home__logout" onClick={this.handleLogoutClick}>Logout</button>
                </div>
            </header>

            <main className="Home__body Container">
                {this.state.view === 'list' && <StickerList timestamp={this.state.timestamp} />}
                {this.state.view === 'profile' && <Profile />}
            </main>

            <footer className="Home__footer Container">
                <button className="Home__addSticker" onClick={this.handleAddClick}>+</button>
            </footer>
        </div>
    }
}