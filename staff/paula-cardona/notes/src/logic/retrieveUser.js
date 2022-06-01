const { User } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')

function retrieveUser(id){
    validateStringNotEmptyNoSpaces(id, 'user id')
                                
    return User.findById(id).lean()  //Con lean() hacemos que solo nos traiga el documento del user
        .then((user)=> {

            if (!user){
                throw new NotFoundError(`user with id ${id} does not exist`)
            }

            delete user.password   //password no existe en la pantalla, hay que poner user.password para llegar a ella
            delete user._id
            delete user.__v

            return user   //ponemos el return dentro porque fuera ese user no existe
        })
          
}

module.exports = retrieveUser




