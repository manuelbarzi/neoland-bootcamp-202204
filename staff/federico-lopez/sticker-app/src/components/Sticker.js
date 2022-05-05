class Sticker extends Component {
    constructor(text = '', parent) {
        super(`<li class="Sticker"></li>`)

        this.id = null

        const editableSticker = new EditableSticker(text)
        const viewSticker = new ViewSticker(text)

        this.editable = editableSticker
        this.view = viewSticker

        let p = this.view.container.querySelector('p')
        let textarea = this.editable.container.querySelector('textarea')

        const editButton = this.view.container.querySelector('.editButton')

        editButton.addEventListener('click', () => {
            this.toEditMode()
        })

        const xButton = this.editable.container.querySelector('.xButton')

        // xButton.addEventListener('click', () => {
        //     parent.remove(this)
        // })

        const form = this.editable.container.querySelector('.Sticker__form')

        form.addEventListener('submit', () => {
            if (!this.id) {
                createNote(sessionStorage.username, textarea.value, (error, note) => {
                    if (error)
                        alert(error.message)
                    else
                        this.setId(note.id)

                })
            } else {
                updateNote(sessionStorage.username, this.id, textarea.value, error => {
                    if (error)
                        alert(error.message)
                })
            }

            p.innerHTML = textarea.value
            this.toViewMode()
        })
    }

    toEditMode() {
        if (this.has(this.view))
            this.remove(this.view)

        this.add(this.editable)
    }

    toViewMode(text) {
        if (this.has(this.editable))
            this.remove(this.editable)

        this.add(this.view)
    }

    onSubmit(callback) {
        const form = this.container.querySelector('form')

        form.addEventListener('submit', event => {
            event.preventDefault()

            const text = form.text.value

            callback(text)
        })
    }

    onClose(callback) {
        const close = this.editable.container.querySelector('.xButton')

        close.addEventListener('click', () => {
            const idExists = !!this.id
            if (idExists)
                this.toViewMode()

            callback(idExists)
        })
    }

    onRemove(callback) {
        const remove = this.view.container.querySelector(".removeButton")

        remove.addEventListener('click', () => {
            deleteNote(sessionStorage.username, this.id, error => {
                if (error) {
                    alert(message.error)
                }
            })
            callback()
        })
    }

    setId(id) {
        this.id = id
    }
}