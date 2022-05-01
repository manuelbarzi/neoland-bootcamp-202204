function Sticker() {
    Component.call(this, `<div class="Sticker">
        <button class="Sticker__close">x</button>
        <form class="Sticker__form">
            <textarea name="text"></textarea>
            <button class="Sticker__edit">Edit</button>
            <button>Save</button>
        </form>
    </div>`)

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
/*Sticker.prototype.onSubmit = function(callback) {
    const form = this.container.querySelector('form')

    form.addEventListener('submit', event => {
        event.preventDefault()
        const text = form.text.value

        createNote(sessionStorage.username, text, error => {
            if (error) {
                alert(error.message)
                return
            }

            alert('sticker saved!')
            callback()
        })
    })
}*/