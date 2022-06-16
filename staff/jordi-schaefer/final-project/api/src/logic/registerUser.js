const { User } = require('../models')
const { ConflictError } = require('errors')
const { validateStringNotEmptyOrBlank, validateUsername, validatePassword, validateEmail} = require('validators')

function registerUser(name, username, password, email) {
    validateStringNotEmptyOrBlank(name, 'name')
    validateUsername(username)
    validatePassword(password)
    validateEmail(email, 'email')

    return User.create({ name, username, password, email })
        .then(() => { })
        .catch(error => {
            
            if (error.code = 11000)
                throw new ConflictError(`user with username ${username} already exists`)
            
            throw error
        })
}

module.exports = registerUser