function createNote(username, text, callback) {
    const userExists = users.some(user => user.username === username)

    if (!userExists) {
        callback(new Error(`username "${username}" does not exist`))

        return
    }

    const note = new Note(username, text)

    notes.push(note)

    callback(null)
}