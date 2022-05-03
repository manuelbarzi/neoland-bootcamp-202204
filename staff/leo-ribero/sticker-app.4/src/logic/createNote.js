function createNote(username, text, callback) {

    const userExists = db.users.some(user => user.username === username)
    
    if (!userExists) {
        callback(new Error(`username "${username}" does not exist`))
        return
    }
    // luego, si existe el usuario, creo la nota

    const note = new Note(username, text)

    db.notes.push(note)
    
    callback(null, note.id)
}

// he llegado mas o menos hasta las 13:06 de la sesión del jueves 29