const { Component } = React

class Home extends Component { //todo lo que vemos en home lo manejamos desde aquí
    
    state= { name : null, timestamp: null, view: 'stickerList' }
    

    handleLogoutClick = () => { //no hace falta manejar el evento porque es un boton, ni formulario ni div
        delete sessionStorage.token //eliminame el token en la sessionstorage

        this.props.onUserLoggedOut()
    
    }

    handleToProfile = () => {
        this.setState ({ view: 'profile' })
    }

    handleToHome = () => {
        this.setState ({ view: 'stickerList'})
    }


    //componentDidMount- load user when component mount. SESSIONSTORAGE DE TODA LA APP
    componentDidMount(){ // RECUPERO USUARIO. cuando se monta el component se dispara este método de React
        retrieveUser(sessionStorage.token, (error, user) =>{ //si hay session storage recuperame el usuario y pintamelo
            if (error) {
                alert(error.message)

                return
            }
            //this.setName(user.name)
            this.setState({ name: user.name })
        })
    }

    onNameChange = () => { //cambiar el nombre arriba en el boton
        retrieveUser(sessionStorage.token, (error, user) => {
            if (error) {
                alert(error.message)
                return
            }
            this.setState({ name: user.name })
        })
    }


    handleAddClick = () =>{
        // TODO convert to api-connected logic
        
        saveNote(sessionStorage.token, null, null, error => {
            if (error) {
                alert(error.message)

                return
            }
            this.setState({ timestamp: Date.now() })
        })    
    }

    render (){
        return <div className="Home Container">
            <header className="Home__header ">
                <button className="Home__home" onClick={this.handleToHome}>📋</button>
                <button className="Home__profile" onClick={this.handleToProfile}>{this.state.name}</button>
                <button className="Home__logout" onClick={this.handleLogoutClick}>Logout</button>
                
            </header>

            <main className="Home__body"> 
                {this.state.view === 'stickerList' && <StickerList timestamp={this.state.timestamp}/>}
                {this.state.view ==='profile' && <Profile />}
                
            </main>

            <footer className="Home__footer Container">
                <button className="Home__addSticker" onClick={this.handleAddClick}>+</button>
            </footer>
        </div>
    }
}

//que se muestre solo si el view es igual que el state, se pintara sticker
//si la view es igual que profile se mostrará profile
    




    
