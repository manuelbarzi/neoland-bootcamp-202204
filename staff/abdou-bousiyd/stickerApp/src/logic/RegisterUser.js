function registerUser(name, username, password, callback) {
    const exists = db.users.some(user => user.username === username)

    if (exists) {
        callback(new Error('username already exists'))

        return
    }

    const user = new User (name, username, password)

    db.users.push(user)

    callback(null)
}