function updateUserName(username, name, newName, callback) {
    const user = db.users.find(user => user.username === username)

    if (!user) {
        callback(new Error(`user with username "${username}" does not exist`))

        return
    }

    if()

}