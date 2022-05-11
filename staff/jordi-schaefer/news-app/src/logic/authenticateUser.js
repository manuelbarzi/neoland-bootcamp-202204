function authenticateUser (username , password, callback) {

    const matches = users.some(function (user) {    // some devuelve true o false
        return user.username === username && user.password === password  // si algun elemento cumple esta condicion
    })

    if(!matches){        // si es false, envio error y me salgo
        callback(new Error('Wrong username or password'))
        return
    }

    callback(null)    // si es true hago callback con null, porque no hay error
}