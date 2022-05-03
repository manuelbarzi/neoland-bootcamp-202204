/*
matches sera un boolean
que el user tenga como username el username i user password con su userpassword
los casos de uso son los posibles retornos que nos da nuestra funcion
*/

function authenticateUser(username, password, callback) {
    const matches = db.users.some(function(user){
        return user.username===username&&user.password===password
    })

    if(!matches) {
        callback(new Error('wrong credentials')) //new Error es un constructor, la callback va devolver un objeto de tipo error. funcion en funcion
        
        return //return deja de leer el codigo, corta el proceso de ejecucion
    }

    callback(null)
}

/*function authenticateUser(usarname, password, callback) {
    const matches = users.some(function(user){
        return user.username===username&&user.password===password
    })

    if(!matches) {
        callback(new Error('wrong credentials'))
        
    else callback(null)
}*/

