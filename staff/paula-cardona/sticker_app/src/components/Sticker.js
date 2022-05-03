function Sticker() {
    Component.call(this, `<div class="Sticker">
        <button>x</button>
        <form class="Sticker__form">   
            <textarea name="text"></textarea>
            <button>Save</button>
        </form>
    </div>`)          //sticker__form : bloque y elemento del bloquee

    

    //const form = this.container.querySelector('form') //busco dentro del this que en este caso es sticker, el elemento for.
    this.id = null
    
    const form = this.container.querySelector('form')
    
    form.addEventListener('submit', event => {  //cuando el form escuche el boton de submit que pare
        event.preventDefault()

        const text = form.text.value     //valor de la clase text del form guardala en text

        if (!this.id)
            createNote(sessionStorage.username, text, (error, noteId) =>{
                if (error){
                    alert(error.message)

                    return
                }

                this.id = noteId

                alert('Sticker saved!')
            })
        else
            updateNote(sessionStorage.username, this.id, text, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                alert('Sticker updated!')
            })
    })
    const close = this.container.querySelector('button')
    close.addEventListener('click', () => {
        if (this.id) {
            deleteNote(sessionStorage.username, this.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }
            })
        }
    })
}

chainPrototypes(Component, Sticker)

Sticker.prototype.onClose = function(callback) {
    const close = this.container.querySelector('button') //guardamos el valor de button en close que será x

    close.addEventListener('click', function(){ //x cuando escuches click ejecuta la función que la función es la callback del home
        callback()
    })
}

Sticker.prototype.setText = function(text) {
    this.container.querySelector('textarea').innerText = text
}

Sticker.prototype.setId = function(id) {
    this.id = id
}