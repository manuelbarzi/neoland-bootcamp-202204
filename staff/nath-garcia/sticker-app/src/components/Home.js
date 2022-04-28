function Home() {
    Component.call(this, `<div class="Home">
        <h2>no user logged :(</h2>
        <button>+</button>
    </div>`)

    
    const add = this.container.querySelector('button')  // selecciono el boton de html

    let creating = false
    //add.addEventListener('click', function() {
    add.addEventListener('click', () => {      // en caso de click crea un nuevo sticker
        
        if (!creating) {
            creating=true
            const sticker = new Sticker


            sticker.onClose(() => {  // ejecuto la funcion onclose de sticker que esta pendiente del boton close, y hace lo siguiente
                this.remove(sticker)
                creating=false
            })

            sticker.onSubmit(() => {
                this.remove(sticker)
                creating=false
            })

            this.add(sticker)
        }
        //}.bind(this))        // no hace flata blind pork es funcion flecha
    })



    if (sessionStorage.username)
        retrieveUser(sessionStorage.username, (error, user) => {
            if (error) {
                alert(error.message)
                return
            }
            this.setName(user.name)
        })
}

chainPrototypes(Component, Home)


Home.prototype.setName = function (name) {
    const title = this.container.querySelector('h2')
    title.innerText = `Ready to add notes, ${name} ✏🗒`
}