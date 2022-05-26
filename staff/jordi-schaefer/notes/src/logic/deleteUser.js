const { User } = require('../models')
const { NotFoundError } = require('../errors')

function deleteUser(userId) {
    // TODO validate input args

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return User.deleteOne({ _id: userId })
        })
        .then(()=> { })
}

module.exports = deleteUser