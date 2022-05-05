function deleteNote(username, id, callback) {
    const userExists = db.users.some(user => user.username === username)
    const idExists = db.notes.some(note => note.id === id)

    if(!userExists) {
        const error = new Error('user does not exist')

        callback(error)
        return
    }
    
    if(!idExists) {
        const error = new Error('note does not exist')

        callback(error)
        return
    }

    const indexNoteToDelete = db.notes.findIndex(note => note.id === id)

    db.notes.splice(indexNoteToDelete, 1)
}