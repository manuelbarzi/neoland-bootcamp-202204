class Sticker extends Component {
    constructor() {
        super(`<div class="Sticker">
            <button class="Button">x</button>
            <form class="Sticker__form">
                <textarea class="Sticker__text" name="text"></textarea>
                <p class="Sticker__id"></p>
                <button class="Button">Save</button>
            </form>
        </div>`)

        this.id = null

        const form = this.container.querySelector('form')

        form.addEventListener('submit', event => {
            event.preventDefault()

            const text = form.text.value

            if (!this.id)
                createNote(sessionStorage.username, text, (error, noteId) => {
                    if (error) {
                        alert(error.message)

                        return
                    }

                    //this.id = noteId
                    this.setId(noteId)

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

    onClose(callback) {
        const close = this.container.querySelector('button')

        close.addEventListener('click', function () {
            callback()
        })
    }

    setText(text) {
        this.container.querySelector('textarea').innerText = text
    }

    setId(id) {
        this.id = id

        this.container.querySelector('.Sticker__id').innerText = `ID #${id}`
    }
}