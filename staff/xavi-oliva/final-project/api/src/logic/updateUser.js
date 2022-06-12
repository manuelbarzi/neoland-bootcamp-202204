const { User } = require('../models')
const { NotFoundError } = require('errors')
const { validateStringNotEmptyOrBlank, validateStringNotEmptyNoSpaces, validateEmail, validateString, validatePassword } = require('validators')

function updateUser(userId, name, surnames, password, phone) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyOrBlank(name, 'name')
    if (surnames != null) validateString(surnames, 'surnames')
    validatePassword(password)
    if (phone != null) validateString(phone, 'phone')

    return User.updateOne({ _id: userId }, { $set: { name, surnames, password, phone }})
        .then(result => {
            if (result.matchedCount === 0)
                throw new NotFoundError(`user with id ${userId} does not exist`)
        })
}

module.exports = updateUser