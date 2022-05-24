const { User } = require('../models')
const { ConflictError } = require('../errors')

function updateUser(id, newName) { //creamos la función createUser y le pasamos por parametros name, username y password
debugger    

    return User.updateOne({ _id: id}, {$set: {name: newName}}) // funcion para crear el uuario con los parametros que nos llegan arriba
        .then((result) => { 
            // si nos dice que ha ido bien, devuelve TRUE pero no ha modificado nada
            // pork no lo ha encontrado
            if (result.modifiedCount === 0) // miramos si no ha modificado
                return new Error('id not found') 

        })
        .catch(error => {  // si update nos devuelve un error SINCRONO 
            if (error.code = 11000) // (de duplicate o de syntax error)
                throw new Error('id not found')  // lanzamos error de que ya existe
            
            throw error // sino lanzamos el error que sea
        })
}

module.exports = updateUser