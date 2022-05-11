const { Component } = React

class Home extends Component {
    state = { view: 'stickers', newStickers: false, name: null }

    onLogoutButtonClick = () => {
        delete sessionStorage.username

        this.props.onLoggedOut()
    }

    handleNewNoteCreated = () => {
        this.setState({ newStickers: false })
    }

    handleOnProfileButton = () => {
        this.setState({ view: 'profile' })
    }

    handleOnStickersButton = event => {
        event.preventDefault()

        this.setState({ view: 'stickers' })
    }

    handleAddNoteClick = event => {
        event.preventDefault()
        
        this.state.newStickers === true ? this.setState({ newStickers: false }) : this.setState({ newStickers: true })
        
    }

    componentDidMount() {
        retrieveUser(sessionStorage.username, (error, user) => {
            if (error) {
                alert(error.message)

                return
            }
            this.setState({ name: user.name })
        })
    }

    render() {
        return <div className="Home">
            <header className="header">
                <a className="viewStickersButton" onClick={this.handleOnStickersButton} >Stickers</a>
                <a className="profileButton" onClick={this.handleOnProfileButton} >{this.state.name}</a>
                <a className="logout" onClick={this.onLogoutButtonClick}>Log Out</a>
            </header>

            <main>
                {this.state.view === 'profile' && <Profile username={sessionStorage.username} />}
                {this.state.view === 'stickers' && <List username={sessionStorage.username} newStickers={this.state.newStickers} onNewNoteCreated={this.handleNewNoteCreated} />}
            </main>
            
            <footer className="footer">
                <a className="addNote" onClick={this.handleAddNoteClick} >+</a>
            </footer>
        </div>
    }
}