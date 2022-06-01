
const { unlink } = require('fs')
const { NotFoundError } = require('../errors')



function deleteUser(userID, callback){
      
     unlink(`./db/users/${userID}.json`, error =>  { 

        if (error) return callback(new NotFoundError('User not exist'))
             
        return callback('User Delete')

    })
}

module.exports = deleteUser