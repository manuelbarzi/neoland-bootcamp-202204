function retrieveNotes(username, callback){
    const userExists = db.users.some(user=> user.username === username)

    if (!userExists){
        callback(new Error(`username "${username}" does not exist`))

        return
    }

    const notes = db.notes.filter(note => note.username === username)

    callback(null, notes)
}