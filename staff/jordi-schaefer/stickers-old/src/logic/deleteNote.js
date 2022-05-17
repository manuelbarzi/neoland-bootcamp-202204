function deleteNote(username, noteId, callback) {
    
    // compruebo si el usuario existe
    const userExists = db.users.some(user => user.username === username)
    if (!userExists) {
        callback(new Error(`username "${username}" does not exist`))
        return
    }

    // compruebo si el id existe
    // buscando el index donde el id coincide
    
    
    const index = db.notes.findIndex(note => note.id === noteId)
    if (index < 0) {
        callback(new Error(`note with id "${noteId}" does not exist`))
        return
    }

    // compruebo si la nota con ese index tambien es de ese usuario
    const note = db.notes[index]
    if (note.username !== username) {
        callback(new Error(`user "${username}" does not own note with id "${noteId}"`))
        return
    }

    // con splice elimino 1 nota en la posicion del index
    db.notes.splice(index, 1)

    callback(null)
}