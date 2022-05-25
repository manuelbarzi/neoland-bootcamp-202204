const { User } = require('../models')
const { NotFoundError } = require('../errors')

function retrieveUser(id){

    return User.findById(id).lean()  //ponemos return porque hay que ponerle para que las promises se ejecuten cuando terminen
        .then((user)=> {

            if (!user){
                throw new NotFoundError(`user with id ${userId} does not exist`)
            }

            delete user.password   //password no existe en la pantalla, hay que poner user.password para llegar a ella
            delete user._id
            delete user.__v

            return user   //ponemos el return dentro porque fuera ese user no existe
        })
          
}

module.exports = retrieveUser




