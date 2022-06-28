const { User } = require('../models')
const { NotFoundError, AuthError } = require('../errors')
const { validatePassword } = require('../validators')

function deleteUser(userId, password) {
    validatePassword(password)

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)
            
            if (user.password !== password)
                throw new AuthError(`Password is not correct`)

            return User.deleteOne({ _id: userId, password: password })
        })
        .then(()=> { })
}

module.exports = deleteUser