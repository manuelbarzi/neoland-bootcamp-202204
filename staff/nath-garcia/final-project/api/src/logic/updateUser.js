const { User } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyOrBlank, validateStringNotEmptyNoSpaces, validateEmail, validateUsername, validateNumber, validatePassword } = require('../validators')

function updateUser(userId, name, surname, username, email, phone, password){
    validateStringNotEmptyOrBlank(name, 'name')
    validateStringNotEmptyNoSpaces(surname, 'surname')
    validateUsername(username)
    validateEmail(email)
    validateNumber(phone)
    validatePassword(password)

    return User.updateOne({ _id: userId }, { $set: { name, surname, username, email, phone, password }})
    .then(result => {
        if (result.matchedCount === 0)
        throw new NotFoundError(`user with id ${userId} does not exist`)
    })
}

module.exports = updateUser