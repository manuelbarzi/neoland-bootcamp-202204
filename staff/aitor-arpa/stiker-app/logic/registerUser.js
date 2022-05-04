
function registerUser (name, username, password, callback) {
    const exist = db.users.some(user => user.username === username)
    if (exist) {
        callback(new Error('username already exists'))
        return
    }

    const user = { // creo un nuevo usuario
        name,
        username,
        password
    }

    db.users.push(user) // sube el Usuario a la Base de datos users

    callback(null)
}