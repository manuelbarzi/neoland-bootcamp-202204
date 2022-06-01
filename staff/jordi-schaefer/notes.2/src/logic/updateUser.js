const { User } = require('../models')
const { NotFoundError } = require('../errors')

function updateUser(userId, newName) {
    // TODO validate input args

    return User.updateOne({ _id: userId}, {$set: { name: newName}})
        .then((result) => { // console.log(); debugger })  // este then captura la respuesta del user Id
        // pero no nos interesa recivir ni devolver nada
        // si quitas el then o lo dejas con solo parentesis vacios
        // te devuelve la respuesta

        // si nos dice que ha ido bien, devuelve TRUE pero no ha modificado nada
        // pork no lo ha encontrado
        if (result.modifiedCount === 0) // miramos si no ha modificado
            throw new Error('user not found')
        })

        .catch(error => {
            if (error.code = 11000)
                throw new NotFoundError(`user with Id not found`) // ${userId} 
            
            throw error
        })
}

module.exports = updateUser