function retrieveUser(username, callback) {
    const user = db.users.find(user => user.username === username)

    if(!user) {
        callback(new Error(`user whirh username ${username} mot found`))
        return
    }

    const copy = User.copyFrom(user)

    delete copy.password
    callback(null, copy)
}