function retrieveUser(username, callback) {  // recuperar
    const user = users.find(user => user.username === username)
    // find devuelve el valor del primero que cumple la funcion

    if (!user) {
        callback(new Error(`user with username ${username} not found`))
        return
    }

    // creo una copia para no tener que enviarle la contraseña
/*
    const copy = {   
        name: user.name,
        username: user.username
    } 
*/

    const copy = new User

    for (const key in user)      // para cada elemento de user
        if (key != 'password')   // si el elemento es distinto de password
            copy[key] = user[key] // guardamelo en el bojeto copia



    callback(null, copy)
}