function updateNote(username, noteId, text, callback) {

    // comprueba si el usuario existe
    const userExists = db.users.some(user => user.username === username)
    if (!userExists) {
        callback(new Error(`username "${username}" does not exist`))
        return
    }

    // comprueba si el ID de la nota existe
    const note = db.notes.find(note => note.id === noteId)
    if (!note) {
        callback(new Error(`note with id "${noteId}" does not exist`))
        return
    }

    // comprueba que el usuario coincida
    if (note.username !== username) {
        callback(new Error(`user "${username}" does not own note with id "${noteId}"`))
        return
    }

    // añado el nuevo texto
    note.text = text
    callback(null)
}