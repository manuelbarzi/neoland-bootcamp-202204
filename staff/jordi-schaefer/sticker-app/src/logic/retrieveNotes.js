function retrieveNotes(username, callback) {  // recuperar
    const note = notes.filter(note => note.username === username)
    //crea un nuevo array con todos los elementos que cumplan la condicion deseada
    if (!note) {
        callback(new Error(`user with username ${username} not found`))
        return
    }

    callback(null, note)
}