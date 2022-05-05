function createNote (username, text, callback) {
    const userExsist = bd.users.some(user => user.username === username)

    if (!userExsist) {
        callback (new Error(`username "${username}" does not exist`))
        return
    }
    
    const note = new Note (username, text)
    
    bd.notes.push (note)
    callback(null)
}