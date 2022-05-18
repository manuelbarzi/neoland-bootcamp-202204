function saveNote(username, noteId, text, callback) {
    const userExists = db.users.some(user => user.username === username)

    if (!userExists) {
        callback(new Error(`username "${username}" does not exist`))

        return
    }

    let note = db.notes.find(note => note.id === noteId)

    if (!note) {
        // callback(new Error(`note with id "${noteId}" does not exist`))
        note = new Note(username, text)
        note.id = noteId //reescribo el ide y le pongo el que yo quiero

        db.notes.push(note)

        // return , en lugar de esto habrá que llamar al
    } else {

        if (note.username !== username) {
            callback(new Error(`user "${username}" does not own note with id "${noteId}"`))

            return
        }
        
        note.text = text
    }







    callback(null)
}