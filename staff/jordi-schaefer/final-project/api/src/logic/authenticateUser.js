const { User } = require('../models')
const { AuthError } = require('errors')
const { validateString, validatePassword } = require('validators')

function authenticateUser(username, password) {
    validateString(username, 'Username')
    validatePassword(password, 'Password')

    return User.findOne({ username, password })
        .then(user => {
            if (!user)
                throw new AuthError('wrong credentials')

            return user.id
        })
}

module.exports = authenticateUser