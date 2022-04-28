function registerUser(name, username, password, callback){
    const exists = users.some(user => user.username === username)

    if (exists) {
        callback(new Error ('username already exists'))
    
        return
    }
    const user = {
        name: name,
        username: username,
        password: password
    }


    users.push(user)
    callback(null)

}