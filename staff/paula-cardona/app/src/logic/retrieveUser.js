function retrieveUser(username, callback) {  // recuperar
    const user = users.find(user => user.username === username)
    // find devuelve el valor del primero que cumple la funcion

    if (!user) {
        callback(new Error(`user with username ${username} not found`))
        return
    }

    callback(null, user)
}