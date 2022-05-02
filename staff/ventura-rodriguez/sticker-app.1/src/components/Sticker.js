function Sticker() {
    Component.call(this, `<div class="Sticker">
        <button>x</button>
        <form class="Sticker__form">
            <textarea name="text"></textarea>
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
    const closeButton = this.container.querySelector('button')

    closeButton.addEventListener('click', function() {
        callback()
    })
}