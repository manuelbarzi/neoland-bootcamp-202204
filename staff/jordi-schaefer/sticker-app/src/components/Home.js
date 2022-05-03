function Home() {
    Component.call(this, `<div class="Home container">
        <header class="Home__header">
            <h2 style="color: gainsboro">no user logged :(</h2>
            <button class="my">My notes</button>
            <button class="edit">Edit</button>
            <button class="Home__logout">Logout</button>
        </header>

        <ul class="Home__list Container"></ul>

        <footer class="Home__footer Container">
            <button class="Home__addSticker">+</button>
        </footer>
    </div>`)


    let notelist
    let stickerlist
    let sticker


    
    // cuando inicie home, si hay usuario logeado, haz lo siguiente:
    // - cambiar nombre de arriba
    // - montrar listas no editables --> como OBJETO list

    if (sessionStorage.username) {
        retrieveUser(sessionStorage.username, (error, user) => {
            if (error) {
                alert(error.message)
                return
            }
            this.setName(user.name)
        })


        notelist = new NoteList()
        this.add(notelist)  // añado el objeto listas   
    }




    // boton   /logout/

    const logoutButton = this.container.querySelector('.Home__logout')
    logoutButton.addEventListener('click', () => {
        delete sessionStorage.username
        
        app.remove(home)
        app.add(login)
    })
    
    



    // boton  / + /

    const addStickerButton = this.container.querySelector('.Home__addSticker')
    addStickerButton.addEventListener('click', () => {      // en caso de click crea un nuevo sticker
        
        sticker = new Sticker

        sticker.onClose(() => {  // ejecuto la funcion onclose de sticker que esta pendiente del boton close, y hace lo siguiente
            this.remove(sticker)
        })

        if (stickerlist)    
            stickerlist.add(sticker)
    }) 





    // boton    /edit/   
    // -borra la lista de notas
    // -crea un OBJETO lista con stickers editables

    const edit = this.container.querySelector('.edit')
    edit.addEventListener('click', () => {

        if(notelist) {
            //notelist.removeFrom(this)
            home.remove(notelist)
            notelist = null  // string vacio se considera false
        }

        if(stickerlist)
            this.remove(stickerlist)  // borro las listas actuales


        stickerlist = new StickerList()
        this.add(stickerlist)  // añado lista a home
    })





    // boton    /my notes/ 
    // -borra la lista de notas
    // -crea un OBJETO lista con notas no editables
    
    const my = this.container.querySelector('.my')
    my.addEventListener('click', () => {

        if(notelist)
            this.remove(notelist)  // borro el objeto listas
        
        if(stickerlist) {
            stickerlist.removeFrom(this)
            stickerlist = null
        }

        notelist = new NoteList()
        this.add(notelist)        // añado el objeto listas
    })

}



chainPrototypes(Component, Home)


Home.prototype.setName = function (name) {
    const title = this.container.querySelector('h2')
    title.innerText = `Hello!,  ${name} ✏🗒`
}