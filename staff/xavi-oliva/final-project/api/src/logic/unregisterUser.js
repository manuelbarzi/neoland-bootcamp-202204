const { AuthError } = require("errors");
const { User } = require("../models");
const { validateStringNotEmptyNoSpaces, validatePassword } = require("validators");

function unregisterUser(userId, password) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validatePassword(password)

    return User.findById(userId)
        .then(result => {
            if (result === null) throw new AuthError('incorrect Id')

            if (result.password !== password) throw new AuthError('wrong credentials')

            return User.deleteOne({ _id: userId })
        })
        .then(() => {})
}

module.exports = unregisterUser