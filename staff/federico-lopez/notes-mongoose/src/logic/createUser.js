const { User } = require('../models')
const { ConflictError } = require('../errors')
const { validateStringNotEmptyNoSpaces, validateStringNotEmptyOrBlank, validatePassword } = require('../validators')

function createUser(name, username, password) {
    validateStringNotEmptyOrBlank(name, 'name')
    validateStringNotEmptyNoSpaces(username, 'username')
    validatePassword(password)

    return User.create({ name, username, password })
        .then(() => {})
        .catch(error => {
            if (error.code = 11000)
                throw new ConflictError(`user with username ${username} already exists`)
            
            throw error
        })
}

module.exports = createUser