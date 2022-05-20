const { validateFunction, validateStringNotEmptyNoSpaces } = require('../validators')
const { readFile } = require('fs')
const { NotFoundError } = require('../errors')


// si me pasan un usuario y su contraseña
// quiero devolver toda la info que tenga de el ( si existe)
function retrieveUser(userId, callback) {
    validateStringNotEmptyNoSpaces(userId)
    validateFunction(callback, 'callback')

    //access verifica si existe el archivo o no
    readFile(`./db/users/${userId}.json`, 'utf8', (error, json) => { // lo leo
        if(error) return callback(new NotFoundError(`User with id ${userId} not found`))

        const user = JSON.parse(json)
        delete user.password
        return callback(null, user)
    })


}

module.exports = retrieveUser

