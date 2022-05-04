function registerUser(name, username, password, callback){
    const exists=users.some(user=>user.username===username)

    if(exists){
        callback(new Error('username already exists'))//fallo esta en que este

        return
    }

    const user={
        name, //es lo mismo que name:name lo podemos poner 1 vez porque coinciden
        username, //username=username
        password, //password.password
    }

    users.push(user)

    callback(null)
}