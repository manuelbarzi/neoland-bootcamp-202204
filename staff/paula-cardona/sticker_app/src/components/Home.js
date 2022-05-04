class Home extends Component { //todo lo que vemos en home lo manejamos desde aquí
    constructor (){
        super(`<div class="Home Container">
        <header class="Home__header ">
            <button class="Home__home">📋</button>
            <button class="Home__profile">Profile</button>
            <button class="Home__logout">Logout</button>
        </header>

        <main class="Home__body"></main>

        <footer class="Home__footer Container">
            <button class="Home__addSticker">+</button>
        </footer>
    </div>`)

    
    const addStickerButton = this.container.querySelector('.Home__addSticker')  //en el container de footer me seleciona el boton de la home de addsticker y lo guarda en addstickerbutton
    const stickerList = new StickerList //crea una nueva stickerlist que la guardara en sticker list. sera componente que trabajaremos a parte
    let profile  ////creamos un nuevo constructor que trabajaremos a parte que es el profile y lo guarda en le profile (creado anteriormente)
    

    this.addToBody(stickerList) //home añade a tu body el sticker list

    const homeButton = this.container.querySelector('.Home__home') //llamo el boton para ir a la home y lo llamo buttonhome

    homeButton.addEventListener('click', () => { //cuando el buttonhome escuche click
        if (!this.hasBody(stickerList)){   //si la home no esta dentro del body del sticker list
            this.removeFromBody(profile) //entonces la home tiene que eliminar el body del profile

            this.container.querySelector('.Home__footer').appendChild(addStickerButton) //elige el home footer y añadele el botón de añadir sticker

            this.addToBody(stickerList) //home, añade la stickerlist
        }
    })

    const profileButton = this.container.querySelector('.Home__profile')

    profileButton.addEventListener('click', () => { //boton de perfil cuando escuches click
        if (!profile || !this.hasBody(profile)) { //si no estas en el profile o la home no esta en el body del profile
            this.removeFromBody(stickerList) //home, eliminate del cuerpo del stickerlist

            this.container.querySelector('.Home__footer').removeChild(addStickerButton) //llama al footer del home i quitalo, junto con el addstickerbutton
    
            if(!profile)
                profile = new Profile //creamos un nuevo constructor que trabajaremos a parte que es el profile y lo guarda en le profile (creado anteriormente)
    
            this.addToBody(profile) //home añademe el cuerpo del profile
        }
    })

    const logoutButton = this.container.querySelector('.Home__logout')

    logoutButton.addEventListener('click', () => { //cuando el botón de logout escuche click
        delete sessionStorage.username //eliminame el username almacenado en la sessionstorage

        app.remove(home) //app elimina el login
        app.add(login)  //app abre login
    })

    addStickerButton.addEventListener('click', () => {
        const sticker = new Sticker

        sticker.onClose(() => { //en home elimina el sticker
            stickerList.removeSticker(sticker)
        })

        stickerList.addSticker(sticker)
    })

    if(sessionStorage.username)
        retrieveUser(sessionStorage.username, (error, user) => {
            if (error) {
                alert(error.message)

                return
            }
            
            this.setName(user.name)
        })

    }


    setName(name){
        const profileButton = this.container.querySelector('.Home__profile')

        profileButton.innerText = name
    }

    addToBody(component){
        this.container.querySelector('.Home__body').appendChild(component.container)
    }

    removeFromBody(component) {
        this.container.querySelector('.Home__body').removeChild(component.container)
    }

    hasBody(component) {
        return this.container.querySelector('.Home__body').hasChild(component.container)
    }
}

/* filtra una busqueda. query significa coincidencia en algo. 
this- contexto en el momento de ejecución
bind- te doy el contexto de ejcucion del momento*/
