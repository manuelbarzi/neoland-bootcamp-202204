const { User } = require('../models')
const { AuthError } = require('../errors')
const { validateUsername, validatePassword } = require('../validators')

function authenticateUser(username, password) {
    validateUsername(username)
    validatePassword(password)
debugger
    return User.findOne({ username, password })
        .then(userfind => {
            if (!userfind)
                throw new AuthError('wrong credentials')

            return userfind.id
        })
}

module.exports = authenticateUser