function retrieveUser(username, callback) {
    const user = users.find(user => user.username === username)

    if (!user) {
        callback(new Error(`user with username ${username} not found`))

        return
    }

    callback(null, user)
}