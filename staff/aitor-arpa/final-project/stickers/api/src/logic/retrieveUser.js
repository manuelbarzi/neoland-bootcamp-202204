const { User } = require('../models')
const { NotFoundError } = require('../errors')

function retrieveUser(userId) {
   
    return User.findById(userId)
        .then(user => {
            if (!user)// si la respuesta viene vacia error not found
                throw new NotFoundError(`user with id ${userId} does not exist`)

            const doc = user._doc // {_id: ObjectId, name: 'Papa Gayo', username: 'papagayo', password: '123123123', __v: 0}
// elimino las propiedades que no quiero que vea el usuario de la variable doc no del usuario
            delete doc._id
            delete doc.__v
            delete doc.password

            return doc
        })
}

module.exports = retrieveUser