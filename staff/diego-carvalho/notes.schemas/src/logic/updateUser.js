const { User } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyOrBlank, validateObjectId} = require('../validators')

function updateUser(userId, name, age, email, phone) {
    validateStringNotEmptyOrBlank(name, 'name')
    validateObjectId(userId)
    

    return User.updateOne({ _id: userId }, { $set: { name, age, email, phone } })
        .then((result) => {
            if (result.matchedCount === 0)
                throw new NotFoundError(`user with id ${userId} does not exist`)
        })
}

module.exports = updateUser



