function retrieveNotes(username, callback) {
    const userExists = db.users.some(user => user.username === username)

    if (!userExists) {
        callback(new Error (`user with username "${username} does not exist`), null)

        return
    }

    const notes = db.notes.filter(note => note.username)

    callback(null, notes)
    
}