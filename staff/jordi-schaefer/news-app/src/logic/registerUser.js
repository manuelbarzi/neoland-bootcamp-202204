function registerUser (name, username, password, callback) {
    const exist = users.some(user => user.username === username)
    if (exist) {
        callback(new Error('username already exists'))
        return
    }

    const user = new User(name, username, password)


    users.push(user) // sube el Usuario a la Base de datos users

    callback(null)
}