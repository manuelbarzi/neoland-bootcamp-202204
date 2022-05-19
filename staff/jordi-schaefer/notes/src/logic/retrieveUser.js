const { validateFunction } = require('../validators')
const { readdir, readFile } = require('fs')
const { AuthError } = require('../errors')


// si me pasan un usuario y su contraseña
// quiero devolver toda la info que tenga de el ( si existe)
function retrieveUser(userId, callback) {
    // validate ID
    validateFunction(callback, 'callback')

    //access verifica si existe el archivo o no
    readFile(`./db/users/${userId}.json`, 'utf8', (error, json) => { // lo leo
        if(error) return callback(new Error('User does not exist'))

        const user = JSON.parse(json)
        delete user.password
        return callback(null, user)
    })


}

module.exports = retrieveUser

