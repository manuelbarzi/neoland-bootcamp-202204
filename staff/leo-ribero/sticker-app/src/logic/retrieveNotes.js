function retrieveNotes(username, callback){
    const userExists = user.some(user => user.username === username)

    if (!userExists) {
        callback(new Error(`username "${username}" does not exist`))

        return
    }
}