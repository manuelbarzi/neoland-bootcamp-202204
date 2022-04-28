function Sticker() {
    Component.call(this, `div class="Sticker">
    <button>x</button>
    <form class="Sticker__form">   
        <textarea name="text"></textarea>
        <button>Save</button>
        </form>
    </div>`)          //sticker__form : bloque y elemento del bloquee

    const form = this.container.querySelector('form') //busco dentro del this que en este caso es sticker, el elemento for.
    
    form.addEventListener('submit', event=>{  //cuando el form escuche el boton de submit que pare
        event.preventDefault()

        const text = form.text.value     //valor de la clase text del form guardala en text

        createNote(sessionStorage.username, text, error =>{
            if (error){
                alert(error.message)

                return
            }

            alert('Sticker saved!')
        })
    })
}

chainPrototypes(Component, Sticker)

Sticker.prototype.onClose = function(callback) {
    const close = this.container.querySelector('button') //guardamos el valor de button en close que será x

    close.addEventListener('click', function(){ //x cuando escuches click ejecuta la función que la función es la callback del home
        callback()
    })
}