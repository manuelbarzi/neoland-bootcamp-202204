function retrieveUser(username, callback) {  // recuperar
    const user = users.find(user => user.username === username)
    // find devuelve el valor del primero que cumple la funcion

    if (!user) {
        callback(new Error(`user with username ${username} not found`))
        return
    }

    callback(null, user)
}
//delete user.password ERROR!
/*
const copy = {
    name:user.name,
    username: user.username
}
*/
/*
const keys = Object.keys(user) //['name', 'username', 'password']

for(let i = 0; i < keys.length; i++) {
    const key = keys[i]

    if(key != 'password')
    copy[key] = user[key]
    */
