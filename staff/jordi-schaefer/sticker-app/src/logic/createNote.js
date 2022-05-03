function createNote(username, text, callback) {

    // compruebo si el usuario existe
    const userExists = db.users.some(user => user.username === username)
    if (!userExists) {
        callback(new Error(`username "${username}" does not exist`))
        return
    }

    // creo una nueva nota con u usuario y texto
    const note = new Note(username, text)

    // y la añado a la lista
    db.notes.push(note)

    callback(null, note.id)
}