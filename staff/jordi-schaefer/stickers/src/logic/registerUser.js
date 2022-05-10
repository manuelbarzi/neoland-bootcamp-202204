function registerUser(name, username, password, callback) {
    
    // compruebo si el usuario existe
    const exists = db.users.some(user => user.username === username)
    if (exists) {
        callback(new Error('username already exists'))
        return
    }

    // creo un nuevo usuario con sus datos
    const user = new User(name, username, password)
    // y lo añado a la lista
    db.users.push(user)

    callback(null)
}