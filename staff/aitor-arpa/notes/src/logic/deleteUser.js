const { validateFunction, validateJwt } = require('../validators')
const { unlink } = require('fs')

function deleteUser(userID, password, callback){
        
    validateFunction(callback, 'callback')


    unlink(`./db/users/${userID}.json`, callback =>  { 

        if (error) return callback(new Error('User not exist'))

      
       
        return callback('User Deleted')


    })
}

module.exports = deleteUser