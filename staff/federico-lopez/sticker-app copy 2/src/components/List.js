function List(username) {
    Component.call(this, `<ul class="List"></ul>`)

    retrieveNotes((error, retrievedNotes) => {
        if (error) {
            alert(error.message)
            return
        }
        retrievedNotes.forEach(note => {
            noteComponent = new NoteComponent(note.username, note.text)

            this.add(noteComponent)

            noteComponent.onClickEdit((previousText) => {
                this.remove(noteComponent)

                stickerToEdit = new Sticker(previousText)

                this.add(stickerToEdit)
            })
        })

    })
}

chainPrototypes(Component, List)