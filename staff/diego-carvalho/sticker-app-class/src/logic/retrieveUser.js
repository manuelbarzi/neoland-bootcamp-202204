function retrieveUser(username, callback) {
    const user = db.users.find(user => user.username === username)

    if (!user) {
        callback(new Error(`user with username "${username}" does not exist`))

        return
    }

    const copy = User.copyFrom(user)

    delete copy.password

    callback(null, copy)
}