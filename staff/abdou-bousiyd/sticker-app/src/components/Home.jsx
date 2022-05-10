const { Component } = React

class Home extends Component {
    
    // state = {view: 'stickers', name: null, newNotes: []}
    state = { name: null, timestamp: null, view: 'list' }


    componentDidMount() {
        retrieveUser(sessionStorage.username, (error, user) => {
            if (error) {
                alert(error.message)
                return
            }
            this.setState({ name: user.name })
        })
    }

    handleAddClick = () => {
        // const newNotes = [...this.state.newNotes]
        // const note = new Note()
        // newNotes.push(note)
        // this.setState({ newNotes })
        saveNote(sessionStorage.username, null, null, error => {
            if (error) {
                alert(error.message)

                return
            }

            this.setState({ timestamp: Date.now() })
        })
    }

    handleStickerSaved = stickerId => {
        const newNotes = this.state.newNotes.filter(note => note.id !== stickerId)
        this.setState({ newNotes })
    }

    handleLogoutClick = () => {
        delete sessionStorage.username
        this.props.onUserLoggedOut()
    }

    handleProfileNavigation = () => this.setState({ view: 'profile' })

    handleHomeClick = () => this.setState({ view: 'list' })

    render() {
        return <div className="Home Container">
            <header className="Home__header Container Container--row Container--spread-sides">
                <button className="Button Button--no-border Home__home" onClick={this.handleHomeClick}>📋</button>
                <div>
                    <button className="Button Button--no-border Home__profile" onClick={this.handleProfileNavigation}>{this.state.name}</button>
                    <button className="Button Button--no-border Home__logout" onClick={this.handleLogoutClick}>Logout</button>
                </div>
            </header>

            <main className="Home__body Container">
                {/* quitar props a profile */}
                {/* { this.state.view === 'stickers' && <StickerList newNotes={this.state.newNotes} handleStickerSaved={this.handleStickerSaved} />} */}
                { this.state.view === 'list' && <StickerList timestamp={this.state.timestamp} />}
                { this.state.view === 'profile' && <Profile username={sessionStorage.username} />}
            </main>

            <footer className="Home__footer Container">
                <button className="Home__addSticker" onClick={this.handleAddClick}>+</button>
            </footer>
        </div>
    }
}