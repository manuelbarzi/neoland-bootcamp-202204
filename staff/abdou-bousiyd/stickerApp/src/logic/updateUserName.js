function updateUserName(username, name, callback) {
    console.log(name)

    const user = db.users.find(user => user.username === username)

    if (!user) {
        callback(new Error(`user with username "${username}" does not exist`))
        return
    }

    if (user.username !== username) {
        callback(new Error('wrong username'))

        return
    }

    if (username === name) {
        callback(new Error('current username and new name are the same'))

        return
    }

    // if (newPassword !== newPasswordRepeat) {
    //     callback(new Error('new password and new password repeat are not the same'))

    //     return
    // }

    user.username = name

    callback(null)
}