// Aprovecho el UpdateNotes para crear una nueva logica
// en la que si esta guardado lo rescribe y si no lo guarda nuevo 
function saveNote ( username,noteId, text, callback ) {
    const userExists = db.users.some(user=> user.username === username)

    if (!userExists) {
        callback(new Error(`username "${username}" does not exist`))

        return
    }

    let note = db.notes.find(note => note.id === noteId)

    if(!note) {
        note = new Note(username, text)
        note.is = noteId
        db.notes.push(note)

    } else {
        if (note.username !== username) {
            callback(new Error(`user "${username}" does not own with id "${noteId}"`))
            return
        }

        note.text = text 
    }
    callback(null)
}