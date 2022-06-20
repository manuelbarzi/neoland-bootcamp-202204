const { User } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyOrBlank, validateStringNotEmptyNoSpaces, validateEmail, validatePositiveInteger, validatePassword } = require('../validators')

function updateUser(userId, name, email, password, address) {
    
    validateStringNotEmptyNoSpaces(userId, 'user id')
    if (name !=null) validateStringNotEmptyOrBlank(name, 'name')
    if (email != null)  validateEmail(email, 'email')
    if (password != null)  validatePassword(password, 'password')
    if (address != null)  validateStringNotEmptyOrBlank (address,'address')

    return User.updateOne({ _id: userId }, { $set: { userId, name, email, password, address}})
        .then(result => {
            if (result.matchedCount === 0)
                throw new NotFoundError(`user with id ${userId} does not exist`)
        })
}

module.exports = updateUser