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

            if (!this.id)
                createNote(sessionStorage.username, text, error => {
            if (error) {
                alert(error.message)

                return
            }

            alert('Sticker saved!')
        })
            else
                updateNote(sessionStorage.username, this.id, text, error => {
                    if(error){
                        alert(error.message)

                        return
                    }

                    alert('Sticker updated!')
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

Sticker.prototype.setText = function(text) {
    this.container.querySelector('textarea').innerText = text
}

Sticker.prototype.setId = function(id) {
    this.id = id
}