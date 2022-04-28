function Sticker() {
    Component.call(this, `<div class="Sticker">
        <button>x</button>
        <form class="Sticker__form">
            <textarea name="text"></textarea>
            <button type="submit" class="save-button">Save</button>
        </form>
    </div>`)

}

chainPrototypes(Component, Sticker)


Sticker.prototype.onClose = function(callback) {
    const close = this.container.querySelector('button')

    close.addEventListener('click', function() {
        callback()
    })
}


Sticker.prototype.onSubmit = function(callback) {
    const form = this.container.querySelector('form')

    form.addEventListener('submit', event => {
        event.preventDefault()
        // AQUI COGIDO PARA GUARDAR EL STICKER
        const text = form.text.value  // guardo el texto

        createNote(sessionStorage.username, text, error => { // y creo una nota enviandole el usuario y el texto de la nota
            if (error) {
                alert(error.message)
                return
            }

            alert('Sticker saved!')
            callback()
        })
    })
}