const { validateUsername, validatePassword, validateFunction } = require('../validators')
const { readdir, readFile } = require('fs')
const { AuthError } = require('../errors')


// si me pasan un usuario y su contraseña
// quiero devolver toda la info que tenga de el ( si existe)
function authenticateUser(username, password, callback) {
    validateUsername(username)  // verifico que lo que me pasan esta ok
    validatePassword(password)
    validateFunction(callback, 'callback')


    readdir(`./db/users`, (error, files) => { // leo todos los archivos
        if (error) return callback(error)
    
        let count = 0, _error

        files.forEach(file => { //para cada uno de los archivos
            readFile(`./db/users/${file}`, 'utf8', (error, json) => { // lo leo

                if(!_error){

                    if(error) return callback(_error = error)

                    count ++

                    const user = JSON.parse(json)
                    
                    // miro que ese archivo tenga el usuario y contraseña que estoy buscando
                    if(user.username === username && user.password === password)
                        return callback(null, user) // si lo tiene le paso callback null y todo el paquete del usuario
                    
                    if(count === files.length) { // si he llegado a leerlos todos, es que no lo he encontrado
                        return callback(new AuthError('wrong credentials')) // paso el error de aviso de que el pavo no esta por aqui :), en algo se ha equivocado
                    }
                }
            })
        })
    })
}

module.exports = authenticateUser






