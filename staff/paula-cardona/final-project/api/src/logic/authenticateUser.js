const { User } = require('../models')
const { AuthError } = require('../errors')
const { validateUsername, validatePassword } = require('../validators')

function authenticateUser(username, password) {
    validateUsername(username)
    validatePassword(password)
    debugger
    return User.findOne({ username, password })
        .then(user => {
            
            if (!user)
                throw new AuthError('Error de credenciales')

            return user.id
        })
}

module.exports = authenticateUser