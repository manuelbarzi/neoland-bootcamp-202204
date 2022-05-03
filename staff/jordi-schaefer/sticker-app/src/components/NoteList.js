function NoteList() {
    Component.call(this, `<ul class="notelist"></ul>`)

    retrieveNotes(sessionStorage.username, (error, data) => {
        if (error) {
            alert(error.message)
            return
        }

        data.forEach(result => { 
            const noteli = new NoteLi(result.text)
            this.add(noteli) 
        })
    })
} 

chainPrototypes(Component, NoteList)