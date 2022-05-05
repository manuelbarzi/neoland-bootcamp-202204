function updateUserName (username, name, newName, callback){
    const user = db.users.find(user => user.username === username)

    if (!user) {
        callback(new Error(`user with username "${username}" does not exist`))

        return
    }

    if (user.name !== name) {
        callback(new Error('wrong name'))

        return
    }

    if (name === newName) {
        callback(new Error('current name and new name are the same'))

        return
    }

    user.name = newName

    callback(null)
}