const { Component } = React

class Home extends Component {

    state = { name: null, notes: null, view: 'edit', newNotes: [] }


    handleLogoutClick = () => {
        delete sessionStorage.token
        this.props.onUserLoggedOut()
    }

    handleListClick = () => {
        this.setState({ view: 'list' })
        this.loadNotes()
    }

    handleEditClick = () => {
        this.setState({ view: 'edit' })
        this.setState({ newNotes: [] })
    }

    handleProfileClick = () => {
        this.setState({ view: 'profile' })
    }


    // primero renderiza y luego lanza el DidMount
    componentDidMount() {
        retrieveUser(sessionStorage.token, (error, user) => {
            if (error) {
                alert(error.message)
                return
            }
            this.setState({ name: user.name })
        })

        this.loadNotes()
    }


    loadNotes = () => { 
        retrieveNotes(sessionStorage.token, (error, notes) => {
            if (error) {
                alert(error.message)  // aqui sale el error del token!!!!
                return
            }
            
            this.setState({ notes })
        })
    }


    handleUserNameChanged = () => {
        retrieveUser(sessionStorage.token, (error, user) => {
            if (error) {
                alert(error.message)
                return
            }
            this.setState({ name: user.name })
        })
    }

    handleStickerSaved = stickerId => {
        const newNotes = this.state.newNotes.filter(note => note.id !== stickerId)

        //this.setState({ newNotes: newNotes })
        this.setState({ newNotes })
    }


    handleAddClick = () => {
        const newNotes = [...this.state.newNotes]
        const note = new Note()
        newNotes.push(note)
        this.setState({ newNotes })

        /*  codigo equivalente, de forma safety
        this.setState((state) => {
            const { newNotes } = state
            newNotes.push(new Note)
            return NewNotes
        }) */
    }




    render () {
        return <div className="Home container">
        <header className="Home__header">
            <div>
                <button className="Home__button" onClick={this.handleProfileClick}>{this.state.name}</button>
                <button className="Home__button" onClick={this.handleListClick}>📒</button>
                <button className="Home__button" onClick={this.handleEditClick}>✍</button>
            </div>
            <button className="Home__button" onClick={this.handleLogoutClick}>Logout</button>
        </header>

        <main className="Home__body">
            {this.state.view === 'edit' && <StickerList  handleStickerSaved={this.handleStickerSaved} newNotes={this.state.newNotes} />}

            {this.state.notes && this.state.view === 'list' && <ul className="List__stickers">
                {this.state.notes.map(note => <li className="Li__note" key={note.id}>
                        <h2>{note.text}</h2>
                    </li>)}
            </ul>}

            {this.state.view === 'profile' && <Profile onUserNameChanged={this.handleUserNameChanged}/>}
        </main>
        
        <footer className="Home__footer Container">
            {this.state.view === 'edit' && <button className="Home__button Transparent" onClick={this.handleAddClick}>➕</button>}
        </footer>
    </div>
    }
}