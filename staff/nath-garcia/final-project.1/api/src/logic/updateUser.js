const { User } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyOrBlank, validateStringNotEmptyNoSpaces, validateEmail, validateUsername, validateNumber, validatePassword } = require('../validators')

function updateUser(userId, name, surname, username, email, phone, password) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    if (name != null) validateStringNotEmptyOrBlank(name, 'name')
    if (surname != null) validateStringNotEmptyNoSpaces(surname, 'surname')
    if (username != null) validateUsername(username)
    if (email != null) validateEmail(email)
    if (phone != null) validateStringNotEmptyNoSpaces(phone)
    if (password != null) validatePassword(password)

    return User.updateOne({ _id: userId }, { $set: { name, surname, username, email, phone, password } })
        .then(result => {
            if (result.matchedCount === 0)
                throw new NotFoundError(`user with id ${userId} does not exist`)
        })
}

module.exports = updateUser