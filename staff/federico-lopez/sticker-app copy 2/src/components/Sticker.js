function Sticker(previousText = '') {
    Component.call(this, `<div class="Sticker">
        <button>x</button>
        <form class="Sticker__form">
            <textarea name="text"></textarea>
            <button>Save</button>
        </form>
    </div>`)

    const textarea = this.container.querySelector('textarea')

    textarea.innerText = previousText

}

chainPrototypes(Component, Sticker)

Sticker.prototype.onSubmit = function (callback) {
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
        callback()
    })
}

Sticker.prototype.onClose = function (callback) {
    const close = this.container.querySelector('button')

    close.addEventListener('click', function () {
        callback()
    })
}