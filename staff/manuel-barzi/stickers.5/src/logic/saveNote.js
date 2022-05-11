function saveNote(username, noteId, text, callback) {
    const userExists = db.users.some(user => user.username === username)

    if (!userExists) {
        callback(new Error(`username "${username}" does not exist`))

        return
    }

    let note = db.notes.find(note => note.id === noteId)

    if (!note) {
        note = new Note(username, text) 
        
        //if (noteId) note.id = noteId
        noteId && (note.id = noteId)

        db.notes.push(note)
    } else {
        if (note.username !== username) {
            callback(new Error(`user "${username}" does not own note with id "${noteId}"`))
    
            return
        }

        note.text = text
    }

    callback(null, note.id)
}