const { Component } = React



class Home extends Component {
    state = { name: null, newNotes: [], view: 'sticker'  }
        
    handleLogoutClick = () => {
        delete sessionStorage.username

        this.props.onUserLoggedOut()
    }

    handleProfileClick = () => {
        
        this.setState({ view: 'profile'})

        
    }

    handleHomeClick = () => {
        retrieveUser(sessionStorage.username, (error, user) => {
            if (error) {
                alert(error.message)

                return
            }

            this.setState({view:'sticker'})
        })   
    }

    // TODO (RTFM componentDidMount lifecycle methods)
    componentDidMount() {
        retrieveUser(sessionStorage.username, (error, user) => {
            if (error) {
                alert(error.message)

                return
            }

            this.setState({ name: user.name })
        })

        
        retrieveNotes(sessionStorage.username, (error, notes) => {
            if (error) {
                alert(error.message)

                return
            }

            this.setState({ notes })
        })
       
  
      
    }

    handleAddClick = () => { // Manejador del boton +

        const newNotes = [...this.state.newNotes] // Array que va guardando todos los Stickers abiertos

        const note = new Note()
        

        newNotes.push(note)


        this.setState({ newNotes })
    }

    render() {
        return <div className="Home Container">
            <header className="Home__header Container Container--row Container--spread-sides">
                <button className="Button Button--no-border Home__home" onClick={this.handleHomeClick}>📋</button>
                <div>
                    <button className="Button Button--no-border Home__profile"onClick={this.handleProfileClick}>{this.state.name}</button>
                    <button className="Button Button--no-border Home__logout" onClick={this.handleLogoutClick}>Logout</button>
                </div>
            </header>

            <main className="Home__body Container">
                {this.state.view === 'sticker' && <StickerList newNotes={this.state.newNotes}/>}
                  {this.state.view === 'profile' && <Profile />} 
            </main>

            <footer className="Home__footer Container">
                <button className="Home__addSticker" onClick={this.handleAddClick}>+</button>
            </footer>
        </div>
    }
}
/* 
        const addStickerButton = this.container.querySelector('.Home__addSticker')
        const stickerList = new StickerList
        let profile

        this.addToBody(stickerList)

        const homeButton = this.container.querySelector('.Home__home')

        homeButton.addEventListener('click', () => {

            if (!this.hasBody(stickerList)) {
                this.removeFromBody(profile)

                this.container.querySelector('.Home__footer').appendChild(addStickerButton)

                this.addToBody(stickerList)
            }
        })

const profileButton = this.container.querySelector('.Home__profile')

profileButton.addEventListener('click', () => {
    if (!profile || !this.hasBody(profile)) {
        this.removeFromBody(stickerList)

        this.container.querySelector('.Home__footer').removeChild(addStickerButton)

    if (!profile)    
        profile = new Profile

    this.addToBody(profile)
            }
        })



        //add.addEventListener('click', function() {
        addStickerButton.addEventListener('click', () => {

            const sticker = new Sticker

            sticker.onClose(() => {
                stickerList.removeSticker(sticker)
            })

            stickerList.addSticker(sticker)
        })



        if (sessionStorage.username) {
            


        chainPrototypes(Component, Home)
    }



    setName(name) {
        const profileButton = this.container.querySelector('.Home__profile')

        profileButton.innerText = name
    }

    addToBody(component) {
        this.container.querySelector('.Home__body').appendChild(component.container)
    }

    removeFromBody(component) {
        this.container.querySelector('.Home__body').removeChild(component.container)
    }

    hasBody(component) {
        return this.container.querySelector('.Home__body').hasChild(component.container)
    }
} */