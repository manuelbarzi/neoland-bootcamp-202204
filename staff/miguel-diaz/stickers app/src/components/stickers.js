function Sticker() {
    Component.call(this, `<div class="Sticker">
        <button>x</button>
        <form class="Sticker__form">
            <textarea name="text"></textarea>
            <button>Save</button>
        </form>
    </div>`)

    // this.id = null

    const form = this.container.querySelector('form')

    form.addEventListener('submit', event => {
        event.preventDefault()

        const text = form.text.value

        if(!this.id)

        createNote(sessionStorage.username, text, error => {
            if (error) {
                alert(error.message)

                return
            }

            // this.id = noteId

            alert('Sticker saved!')
        })
    else
        updateNote(sessionStorage.username, this.id, text, error => {
            if(error) {
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
    const close = this.container.querySelector('button')

    close.addEventListener('click', function() {
        callback()
    })
}

Sticker.prototype.onSubmit = function(callback) {
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

// Sticker.prototype.setText = function(text) {
//     this.container.querySelector('textarea').innerText = text
// }

// Sticker.prototype.setId = function(id) {
//     this.id = id

}
// Sticker.prototype.showNote = function(callback) {
//     const show = this.container.querySelector('.modeltext')

//     show.addEventListener('', function() {
//         callback()
//     })
// }