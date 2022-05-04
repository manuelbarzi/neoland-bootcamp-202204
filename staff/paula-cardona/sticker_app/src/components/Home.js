function Home() {
    Component.call(this, `<div class="Home Container">
        <header class="Home__header">
            <h2>Hello, Home!</h2>
            <button class="Home__logout">Logout</button>
        </header>

        <ul class="Home__list Container"></ul>

        <footer class="Home__footer Container">
            <button class="Home__addSticker">+</button>
        </footer>
    </div>`)

    const logoutButton = this.container.querySelector('.Home__logout')

    logoutButton.addEventListener('click', () => {
        delete sessionStorage.username
        
        app.remove(home)
        app.add(login)
    })

    const addStickerButton = this.container.querySelector('.Home__addSticker')

    //add.addEventListener('click', function() {
    addStickerButton.addEventListener('click', () => { //añade el escuchador en el click         usuario que tiene una cuenta, login
        const list = this.container.querySelector('.Home__list') //home añade sticker. con el arrow function no hace falta poner bind porque this ya hace referencia al sitio donde apunte    
        const sticker = new Sticker //crea un sticker

        sticker.onClose(() => { //en home elimina el sticker
            this.remove(sticker) //en home elimina el sticker
        })

    

        list.append(sticker.container)
    })

    if (sessionStorage.username) { //si me devuelve el username almacenado en la sessionstorage entonces entra el if
        retrieveUser(sessionStorage.username, (error, user) => { //me dará el User y con el User pasare el username guardado y la callback
            if (error) {
                alert(error.message)

                return
            }

            this.setName(user.name) //home coloca el set name  (función linea 34)
        })

        retrieveNotes(sessionStorage.username, (error, notes) => {
            if (error) {
                alert(error.message)

                return
            }

            const list = this.container.querySelector('.Home__list')

            const items = notes.map(note => {
                const item = document.createElement('li')
                const sticker = new Sticker
                sticker.setText(note.text)
                sticker.setId(note.id)

                sticker.onClose(() => list.removeChild(item))
                
                item.appendChild(sticker.container)

                return item
            })

            list.append(...items)
        })
    }
}

chainPrototypes(Component, Home)

Home.prototype.setName = function (name) {
    const title = this.container.querySelector('h2')

    title.innerText = `Hello, ${name}!`
}


/* filtra una busqueda. query significa coincidencia en algo. 
this- contexto en el momento de ejecución
bind- te doy el contexto de ejcucion del momento*/
