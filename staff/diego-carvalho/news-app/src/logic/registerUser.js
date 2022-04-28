function registerUser(name, username, password, callback) {
    //Dentro del array users, verifica si hay algun objeto cuya propiedad username sea igual al parámetro username
    //Si es así, devuelve 'true'. Si no es así, devuelve false
    const exists = users.some(user => user.username === username)

    if (exists) {//the test will work if exists is true, so we use !exists (its different of true) to define it.
        callback(new Error('username already exists'))

        return
    }

    const user = {
        name,
        username,
        password
    }

    users.push(user)

    callback(null)
}
