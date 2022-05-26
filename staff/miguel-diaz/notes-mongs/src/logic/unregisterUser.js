const { User } = require('../models')
const { ConflictError } = require('../errors')
const { toObjectId } = require('../validators')

function unregisterUser(userId) {
    toObjectId(userId)
    // TODO validate input args
    return User.deleteOne({_id: userId}).lean()
        .then(() => { })
        .catch(error => {
            if (error.code = 11000)
                throw new ConflictError(`user with id ${userId} was deleted`)
            
            throw error
        })
}

module.exports = unregisterUser