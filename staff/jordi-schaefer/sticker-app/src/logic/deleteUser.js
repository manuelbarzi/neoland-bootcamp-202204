function deleteUser (username, callback)  {

    const index = db.users.findIndex(user => user.username === username)
    if (index < 0) {
        callback(new Error(`user with username "${username}" does not exist`))
        return
    }

    db.users.splice(index, 1)
    callback(null)
}