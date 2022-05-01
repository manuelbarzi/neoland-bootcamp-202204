function List(username, home) {
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

            noteComponent.onClickRemove((text) => {
                this.remove(noteComponent)
                
                deleteNote(sessionStorage.username, text)

            })

            noteComponent.onClickEdit((noteToEdit, previousText) => {
                this.remove(noteToEdit)

                const sticker = new Sticker(previousText)

                this.add(sticker)

                sticker.onSubmit((text) => {
                    this.remove(sticker)

                    const noteComponent = new NoteComponent(sessionStorage.username, text)

                    this.addFirst(noteComponent)
                })

                sticker.onClose(() => {
                    this.remove(sticker)
                })
            })
        }
    })

    home.onClickAdd(() => {
        const sticker = new Sticker

        sticker.onSubmit((text) => {
            this.remove(sticker)

            createNote(sessionStorage.username, text, error => {
                if (error) {
                    alert(error.message)
    
                    return
                }
    
                alert('Sticker saved!')
            })

            noteComponent = new NoteComponent(sessionStorage.username, text)

            this.addFirst(noteComponent)

            noteComponent.onClickEdit((noteToEdit, previousText) => {
                this.remove(noteToEdit)

                const sticker = new Sticker(previousText)

                this.add(sticker)

                sticker.onSubmit((text) => {
                    this.remove(sticker)

                    deleteNote(sessionStorage.username, previousText)

                    createNote(sessionStorage.username, text, error => {
                        if (error) {
                            alert(error.message)
            
                            return
                        }
            
                        alert('Sticker saved!')
                    })

                    const noteComponent = new NoteComponent(sessionStorage.username, text)

                    this.addFirst(noteComponent)
                })

                sticker.onClose(() => {
                    this.remove(sticker)
                })
            })
        })

        sticker.onClose(() => {
            this.remove(sticker)
        })
        this.addFirst(sticker)
    })
}


chainPrototypes(Component, List)