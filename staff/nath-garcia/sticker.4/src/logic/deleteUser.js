function deleteUser(username, password, callback)  {

    const index = db.users.findIndex(user => user.username === username)

    if (index < 0) {
        callback(new Error(`user with username "${username}" does not exist`))
        return
    }

    const user = db.users.find(user => user.username === username)
    if (user.password !== password) {
        callback(new Error('wrong password'))
        return
    }

    db.users.splice(index, 1)
    callback(null)
}