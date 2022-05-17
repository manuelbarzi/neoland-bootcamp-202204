function deleteUserFun(username, callback) {
    const userExists = db.users.some(user => user.username === username)

    if(!userExists) {
        const error = new Error('the user does not exist')

        callback(error)
        return
    }

    const indexOfUser = db.users.findIndex(user => user.username === username)

    db.users.splice(indexOfUser, 1)

    callback(null)
}