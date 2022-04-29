function Sticker() {
    Component.call(this, `<div class="Sticker">
        <button>x</button>
        <form class="Sticker__form">
            <textarea name="text"></textarea>
            <button type="submit" class="save-button">Save</button>
        </form>
    </div>`)

    // este solo funciona en los stickers editables, pero no en los nuevos
    const form = this.container.querySelector('form')

    form.addEventListener('submit', event => {
        event.preventDefault()

        const text = form.text.value

        createNote(sessionStorage.username, text, error => {
            if (error) {
                alert(error.message)

                return
            }

            alert('Sticker saved!')
        })
    })

}


chainPrototypes(Component, Sticker)






Sticker.prototype.onClose = function(callback) {
    const close = this.container.querySelector('button')

    close.addEventListener('click', function() {
        callback()
    })
}


// este solo funciona en los nuevos, pero no en los editables
Sticker.prototype.onSubmit = function(callback) {
    const form = this.container.querySelector('form')

    form.addEventListener('submit', event => {
        event.preventDefault()
        // AQUI COGIDO PARA GUARDAR EL STICKER
        const text = form.text.value

        createNote(sessionStorage.username, text, error => {
            if (error) {
                alert(error.message)
                return
            }

            alert('Sticker saved!')
            callback()
        })
    })
}