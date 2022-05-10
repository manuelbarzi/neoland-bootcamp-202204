const { Component } = React

class Home extends Component {
    state = { name: null, newNotes: [], view: 'stickerList' }

    handleLogoutClick = () => {
        delete sessionStorage.username

        this.props.onUserLoggedOut()
    }

    handleToProfile = () => {
        this.setState ({ view: 'profile'})
    }
    handleToHome = () => {
        this.setState({ view: 'stickerList' })
    }

    // TODO load user when component mounts (RTFM componentDidMount lifecycle methods)
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
        // const newNotes = []

        // for (const value of this.state.newNotes)
        //     newNotes.push(value)

        const newNotes = [...this.state.newNotes]

        const note = new Note() //Esto no debería hacerse, es un truquito para poder visualizarlo

        newNotes.push(note)

        //this.setState({ newNotes: newNotes })
        this.setState({ newNotes })
    }

    handleStickerSaved = stickerId => {
        const newNotes = this.state.newNotes.filter(note => note.id !== stickerId)

        this.setState({ newNotes })
    }

    render() {
        return <div className="Home Container">
            <header className="Home__header Container Container--row Container--spread-sides">
                <button className="Button Button--no-border Home__home" onClick={this.handleToHome}>📋</button>
                <div>
                    <button className="Button Button--no-border Home__profile" onClick={this.handleToProfile}>{this.state.name}</button>
                    <button className="Button Button--no-border Home__logout" onClick={this.handleLogoutClick}>Logout</button>
                </div>
            </header>

            <main className="Home__body Container">
                {this.state.view === 'stickerList' && <StickerList newNotes={this.state.newNotes} handleStickerSaved={this.handleStickerSaved} />}
                {this.state.view === 'profile' && <Profile />}
            </main>

            <footer className="Home__footer Container">
                <button className="Home__addSticker" onClick={this.handleAddClick}>+</button>
            </footer>
        </div>
    }
}