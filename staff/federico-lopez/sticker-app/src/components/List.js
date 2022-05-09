class List extends Component {
    constructor(username, home) {
        super(`<ul class="List"></ul>`)

        retrieveNotes(username, (error, retrievedNotes) => {
            if (error) {
                alert(error.message)
                return
            }
            for (let i = retrievedNotes.length - 1; i >= 0; i--) {
                const note = retrievedNotes[i]
                const sticker = new Sticker(note.text, this)
                sticker.setId(note.id)

                sticker.toViewMode()

                this.add(sticker)

                sticker.onRemove(() => {
                    this.remove(sticker)
                })

                sticker.onClose(() => {
                    sticker.toViewMode()
                })
            }
        })

        home.onClickAdd(() => {
            const sticker = new Sticker

            sticker.toEditMode()

            this.add(sticker)

            sticker.onClose((idExists) => {
                if (!idExists)
                    this.remove(sticker)
            })

            sticker.onRemove(() => {
                this.remove(sticker)
            })
        })
    }
}