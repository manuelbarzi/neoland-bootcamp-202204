function updateUserPassword(username, password, newPassword, newPasswordRepeat, callback) {
    const user = db.users.find(user => user.username === username)

    if (!user) {
        callback(new Error(`user with username "${username}" does not exist`))

        return
    }

    if (user.password !== password) {
        callback(new Error('wrong password'))

        return
    }

    if (password === newPassword) {
        callback(new Error('current password and new password are the same'))

        return
    }

    if (newPassword !== newPasswordRepeat) {
        callback(new Error('new password and new password repeat are not the same'))

        return
    }

    user.password = newPassword

    callback(null)
}