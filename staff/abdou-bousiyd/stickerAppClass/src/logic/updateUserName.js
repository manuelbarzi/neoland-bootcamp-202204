function updateUserName(username, name, callback) {

    const user = db.users.find(user => user.username === username)

    if (!user) {
        callback(new Error(`user with username "${username}" does not exist`))
        return
    }


    if (user.name === name) {
        callback(new Error('current username and new name are the same'))

        return
    }

    user.name = name

    callback(null)
}