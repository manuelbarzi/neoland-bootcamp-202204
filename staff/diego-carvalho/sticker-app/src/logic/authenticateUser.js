function authenticateUser(username, password, callback) {
    //en esta parte usamos el metodo some para averiguar si las credeciales puestas por el user estan en la BD y nos devolve true o false.
    const matches = users.some(function (user) {
        return user.username === username && user.password === password
    })

    if (!matches) {//si la credenciales estan mal puestas, entramos en essa parte del codigo.
        callback(new Error('wrong credentials'))

        return
    }

    callback(null)//callback del error. Si no hay error nos devolve null.
}