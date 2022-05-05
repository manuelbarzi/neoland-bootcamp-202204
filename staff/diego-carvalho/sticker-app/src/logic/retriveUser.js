/*en esta parte usamos el metodo find para encontrar y traer el username ya registrado en la BD y nos devolve una respuesta.
Si el username no esta, nos devolve un mensaje de error(username "username" does not exist)
 y si esta, nos devolve null y una copia del usuario con el valor de la propriedad password borrada.
*/
function retrieveUser(username, callback){
    const user = users.find(user => user.username === username)

    if(!user){
        callback(new Error(`user  with username ${username} not found`))

        return
    }

    const copy = User.copyFrom(user)

    delete copy.password

    callback(null, copy)
}