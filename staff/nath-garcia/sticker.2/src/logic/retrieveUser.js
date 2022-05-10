function retrieveUser(username, callback) {  
    const user = db.users.find(user => user.username === username)
    // find devuelve el valor del primero que cumple la funcion
    if (!user) {
        callback(new Error(`user with username ${username} not found`))

        return
    }

    const copy = User.copyFrom(user)

    delete copy.password

    callback(null, copy)
}
