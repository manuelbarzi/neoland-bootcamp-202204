const { User } = require('../models')
const { NotFoundError } = require('errors')
const { validateStringNotEmptyOrBlank, validateStringNotEmptyNoSpaces, validateString } = require('validators')

function updateUser(userId, name, surnames, phone) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    if (name != null) validateStringNotEmptyOrBlank(name, 'name')
    if (surnames != null) validateString(surnames, 'surnames')
    if (phone != null) validateString(phone, 'phone')

    return User.updateOne({ _id: userId }, { $set: { name, surnames, phone }})
        .then(result => {
            if (result.matchedCount === 0)
                throw new NotFoundError(`user with id ${userId} does not exist`)
        })
}

module.exports = updateUser