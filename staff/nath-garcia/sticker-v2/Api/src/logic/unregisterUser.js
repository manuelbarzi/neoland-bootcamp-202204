const { User } = require('../models')
const { AuthError } = require('../errors')
const {  validatePassword } = require('../validators')

function unregisterUser(userId, password) {
    validatePassword(password)

    return User.findById( userId)
        .then(user => { 
            if (!user)
                throw new AuthError(`user with id ${userId} does not exist`)

            if (user.password !== password)
            throw new AuthError(`Password is not correct`)

            return User.deleteOne({_id: userId, password: password})
        })
        .then(()=> { })

}

module.exports = unregisterUser