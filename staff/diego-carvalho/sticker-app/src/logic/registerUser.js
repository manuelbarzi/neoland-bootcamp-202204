/*en esta parte usamos el metodo some para averiguar si el user ya esta registrado por el username en la BD y no devolve una respuesta.
Si el username ya esta, nos devolve un mensaje de error(username already exists)
 y si no, nos permite registrar.
*/
function registerUser(name, username, password, callback) {
    const exists = users.some(user => user.username === username)

    if (exists) {
        callback(new Error('username already exists'))

        return
    }

    const user = new User(name, username, password)

    users.push(user)

    callback(null)
}