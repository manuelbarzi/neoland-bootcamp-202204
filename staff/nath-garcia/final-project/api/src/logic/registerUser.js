const { User } = require('../models')
const { ConflictError } = require('../errors')
const { validateStringNotEmptyOrBlank, validateUsername, validatePassword, validateStringNotEmptyNoSpaces, validateEmail } = require('../validators')

function registerUser(name, surname, username, email, phone, password) {
    validateStringNotEmptyOrBlank(name, 'name')
    validateStringNotEmptyNoSpaces(surname, 'surname')
    validateUsername(username)
    validateEmail(email)
    validateStringNotEmptyOrBlank(phone)
    validatePassword(password)

    return User.create({ name, surname, username, email, phone, password })
        .then(() => { })
        .catch(error => {
            if (error.code = 11000)
                throw new ConflictError(`user with username ${username} already exists`)

            throw error
        })
}

module.exports =  registerUser 