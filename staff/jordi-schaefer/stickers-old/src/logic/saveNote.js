function saveNote(username, noteId, text, callback) {

    // comprueba si el usuario existe
    const userExists = db.users.some(user => user.username === username)
    if (!userExists) {
        callback(new Error(`username "${username}" does not exists`))
        return
    }

    // comprueba si el ID de la nota existe
    let note = db.notes.find(note => note.id === noteId)
    if (!note) { // si no existe creo una nueva
        note = new Note(username, text)
        note.id = noteId
        
        db.notes.push(note)
    } else {
        if (note.username !== username) {
            callback(new Error(`user "${username}" does not own note with id "${noteId}"`))
            return
        }
        note.text = text
    }

    // añado el nuevo texto
    callback(null)
}