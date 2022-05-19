const { validateFunction } = require('../validators')
const { readdir, readFile, access } = require('fs')
const { AuthError } = require('../errors')


// si me pasan un usuario y su contraseña
// quiero devolver toda la info que tenga de el ( si existe)
function retriveUser(userID, callback) {

    validateFunction(callback, 'callback')


        readFile(`./db/users/${userID}.json`, 'utf8', (error, json) => { 

            if (error) return callback(new Error( 'User not exist'))


            const user = JSON.parse(json)

            delete user.password
            return callback(null, user)


        })
    


}

module.exports = retriveUser
