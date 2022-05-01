function authenticateUser(username, password, callback) { //Hecho por Ventu
    const matches = db.users.some(function  (user) {
        return user.username === username && user.password === password
    })

    if(!matches) {
        callback(new Error ('wrong credentials'))

        return 
    }

    callback(null)
}
