function List(username) {
    Component.call(this, `<ul class="List"></ul>`)

    retrieveNotes(username, (error, retrievedNotes) => {
        if (error) {
            alert(error.message)
            return
        }
        for (let i = retrievedNotes.length - 1; i >= 0; i--) {
            const note = retrievedNotes[i]
            noteComponent = new NoteComponent(note.username, note.text)

            this.add(noteComponent)

            noteComponent.onClickEdit((noteToEdit, previousText) => {
                this.remove(noteToEdit)

                stickerToEdit = new Sticker(previousText)

                this.add(stickerToEdit)
            })
        }
    })
}

chainPrototypes(Component, List)