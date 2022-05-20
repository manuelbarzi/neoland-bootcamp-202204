const { validateFunction } = require('../validators')
const { unlink } = require('fs')
const { NotFoundError } = require('../errors')


// si me pasan un usuario y su contraseña
// quiero devolver toda la info que tenga de el ( si existe)
function deleteUser(userId, callback) {
    //validateStringNotEmptyNoSpaces(userId)
    validateFunction(callback, 'callback')

    unlink(`./db/users/${userId}.json`, error => {
        if(error) return callback(new NotFoundError(`User with id ${userId} not found`))

        return callback(null)
    })
}

module.exports = deleteUser