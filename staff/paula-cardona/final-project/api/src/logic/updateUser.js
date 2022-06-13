const { User } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyOrBlank, validateStringNotEmptyNoSpaces, validateEmail, validatePositiveInteger } = require('../validators')

function updateUser(userId, name, surname, email, address) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    if (name !=null) validateStringNotEmptyOrBlank(name, 'name')
    if (surname != null) validateStringNotEmptyOrBlank(surname, 'surname')
    if (email != null)  validateEmail(email, 'email')
    if (address != null)  validateStringNotEmptyOrBlank (address,'address')

    return User.updateOne({ _id: userId }, { $set: { userId, name, surname, email, address}})
        .then(result => {
            if (result.matchedCount === 0)
                throw new NotFoundError(`user with id ${userId} does not exist`)
        })
}

module.exports = updateUser