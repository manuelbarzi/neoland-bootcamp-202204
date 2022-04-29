function Home() {
    Component.call(this, `<div class="Home container">
        <header class="Home__header">
            <h2>no user logged :(</h2>
            <button class="my">My notes</button>
            <button class="edit">Edit</button>
            <button class="Home__logout">Logout</button>
        </header>

        <ul class="Home__list Container"></ul>

        <footer class="Home__footer Container">
            <button class="Home__addSticker">+</button>
        </footer>
    </div>`)



    // boton de logout
    const logoutButton = this.container.querySelector('.Home__logout')

    logoutButton.addEventListener('click', () => {
        delete sessionStorage.username
        
        app.remove(home)
        app.add(login)
    })

     

    // boton ADD STICKER como objeto sticker
    
    const addStickerButton = this.container.querySelector('.Home__addSticker')
    
    addStickerButton.addEventListener('click', () => {      // en caso de click crea un nuevo sticker
        
        const sticker = new Sticker

        sticker.onClose(() => {  // ejecuto la funcion onclose de sticker que esta pendiente del boton close, y hace lo siguiente
            this.remove(sticker)
        })

        sticker.onSubmit(() => {
            this.remove(sticker)
        })

        this.add(sticker)

    }) 




        // crear lista NO EDITABLE debajo como objeto!
/*     let list

    // añadir funciones a botones para crear lista
    const showw = this.container.querySelector('.edit') //const show = showw.container.querySelector('button')
    //subb.addEventListener('submit', event => {
    showw.addEventListener('click', () => {
        //event.preventDefault()

        if(list)
            this.remove(list)

        list = new List
        this.add(list)
        
        list.container.innerHTML = ''


        retrieveNotes(sessionStorage.username, (error, data) => {
            if (error) {
                alert(error.message)
                return
            }

            data.forEach(result => {  // para cada elemento encontrado antes
            const li = document.createElement('li')
            li.classList.add('note');
            const h1 = document.createElement('h3')
            const h2 = document.createElement('h2')
            h1.innerText = result.username
            h2.innerText = result.text

            li.appendChild(h1)
            li.appendChild(h2)

            list.container.appendChild(li)
            })
        })
    }) */



    // cuando inicie home, si hay usuario logeado, haz lo siguiente:
    // - cambiar nombre de arriba
    // - montrar listas no editables --> como OBJETO list
    let list

    if (sessionStorage.username) {
        retrieveUser(sessionStorage.username, (error, user) => {
            if (error) {
                alert(error.message)
                return
            }
            this.setName(user.name)
        })


        retrieveNotes(sessionStorage.username, (error, data) => {
            if (error) {
                alert(error.message)
                return
            }
            
            
            if(list)
                this.remove(list)

            list = new List
            this.add(list)  // añado lista a home

            data.forEach(result => { 
                const li = document.createElement('li')
                li.classList.add('note');
                const h = document.createElement('h2')
                h.innerText = result.text

                li.appendChild(h)

                list.container.appendChild(li)
            })
        })
    }




    // boton edit   
    // -borra la lista de notas
    // -crea un OBJETO lista con stickers editables

    const edit = this.container.querySelector('.edit')
    edit.addEventListener('click', () => {

        if(list)
            this.remove(list)  // borro las listas actuales

        list = new List
        this.add(list)  // añado lista a home

        // genero las nuevas con edit
        retrieveNotes(sessionStorage.username, (error, notes) => {
            if (error) {
                alert(error.message)
                return
            }

            notes.forEach(result => { 
                const li = document.createElement('li')
                li.classList.add('Sticker__form');
                const sticker = new Sticker
                sticker.container.querySelector('textarea').innerText = result.text

                li.appendChild(sticker.container)
                list.container.appendChild(li)
            })
        })
    })



    // boton my notes 
    // -borra la lista de notas
    // -crea un OBJETO lista con notas no editables

    const my = this.container.querySelector('.my')
    my.addEventListener('click', () => {

        if(list)
            this.remove(list)  // borro las listas actuales

        list = new List
        this.add(list)  // añado lista a home

        // genero las nuevas con edit
        retrieveNotes(sessionStorage.username, (error, data) => {
            if (error) {
                alert(error.message)
                return
            }

            data.forEach(result => { 
                const li = document.createElement('li')
                li.classList.add('note');
                const h = document.createElement('h2')
                h.innerText = result.text

                li.appendChild(h)

                list.container.appendChild(li)
            })
        })
    })

}



chainPrototypes(Component, Home)



Home.prototype.setName = function (name) {
    const title = this.container.querySelector('h2')
    title.innerText = `Hello!,  ${name} ✏🗒`
}

