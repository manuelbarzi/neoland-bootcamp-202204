function retrieveUser(username, callback) {
    const user = users.find(user => user.username === username)

    if (!user) {
        callback(new Error(`user with username ${username} not found`))

        return
    }

    const copy = new User

    for (const key in user)
        if (key !== 'password')
            copy[key] = user[key]

    callback(null, copy)
}