const { Component, createRef } = React

class Home extends Component {
    state = { view: 'stickers', newStickers: false, name: null }
    ref = createRef()
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

        this.ref.current.foo()
        // Entender bien esta mierda
        // en vez de hacer set
        // Ver si se puede limitara a lo que se puede acceder con ref, en hooks se hace con forward ref y uesimperativehandler
        // this.state.newStickers === true ? this.setState({ newStickers: false }) : this.setState({ newStickers: true })        
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
                {this.state.view === 'stickers' && <List ref={this.ref} username={sessionStorage.username} newStickers={this.state.newStickers} onNewNoteCreated={this.handleNewNoteCreated} />}
            </main>
            
            <footer className="footer">
                <a className="addNote" onClick={this.handleAddNoteClick} >+</a>
            </footer>
        </div>
    }
}

//     if(sessionStorage.username)
//     retrieveUser(sessionStorage.username, (error, user) => {
//         if (error) {
//             alert(error.message)

//             return
//         }

//         this.setName(user.name)
//     })

// const list = new List(sessionStorage.username, this)
// this.add(list)

// const add = this.container.querySelector('.addNote')

// let profile

// const profileButton = this.container.querySelector('.profileButton')

// profileButton.addEventListener('click', () => {
//     if (!profile || !this.has(profile)) {
//         profile = new Profile

//         this.add(profile)
//         if (this.has(list)) {
//             this.remove(list)
//             this.container.querySelector('.footer').removeChild(add)
//         }
//     }
// })

// const listButton = this.container.querySelector('.viewStickersButton')

// listButton.addEventListener('click', () => {
//     if (!this.has(list)) {
//         if (this.has(profile))
//             this.remove(profile)

//         this.add(list)
//         this.container.querySelector('footer').appendChild(add)
//     }
// })
//     }

// setName(name) {
//     const profileButton = this.container.querySelector('.profileButton')

//     profileButton.innerText = name
// }

// onClickLogout(callback) {
//     const logoutButton = this.container.querySelector('.logout')

//     logoutButton.addEventListener('click', () => {
//         delete sessionStorage.username
//         callback()
//     })
// }

// onClickAdd(callback) {
//     const add = this.container.querySelector('.addNote')

//     add.addEventListener('click', () => {
//         callback()
//     })
// }
// }