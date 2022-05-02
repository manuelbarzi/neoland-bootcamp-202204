function Sticker() {
    Component.call(this, `<div class="Sticker">
        <button class="sticker__close"><i class="fa-solid fa-circle-xmark"></i></button>
        <form class="Sticker__form">
            <textarea name="text" placeholder="type here..."></textarea>
            <button class="sticker__form__save">Save</button>
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
            callback(sessionStorage.username, text)

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