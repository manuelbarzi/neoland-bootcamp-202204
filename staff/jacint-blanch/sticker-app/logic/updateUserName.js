function updateUserName(username, newUsername, callback){
    const user = db.users.find(user => user.username === username)

    if (!user) {
        callback(new Error(`user with username "${username}" does not exist`))

        return
    }

    if (user.name === newUsername) {
        callback(new Error('new username its the same as previous one'))

        return
    }

    user.username = newUsername

    callback(null)
}
