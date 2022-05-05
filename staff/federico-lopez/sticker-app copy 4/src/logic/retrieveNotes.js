function retrieveNotes(username, callback) {
    const userExists = db.users.some(user => user.username === username)

    if(!userExists) {
        const error = new Error(`username "${username}" does not exist`)
        callback(error)
        return
    }

    const retrievedNotes = db.notes.filter(user => user.username === username)

    callback(null, retrievedNotes)
}