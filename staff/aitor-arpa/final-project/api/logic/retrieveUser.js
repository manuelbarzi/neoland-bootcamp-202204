const { User } = require('../models')
const { NotFoundError } = require('../errors')

function retrieveUser(userId) {
   
    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            const doc = user._doc 
            delete doc._id
            delete doc.__v
            delete doc.password

            return doc
        })
}

module.exports = retrieveUser