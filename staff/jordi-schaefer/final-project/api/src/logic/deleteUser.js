const { User } = require('../models')
const { NotFoundError, AuthError } = require('errors')

function deleteUser(userId, password) {
    // TODO validate input args

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)
            
            if (user.password !== password)
                throw new AuthError(`Password is not correct`)

            return User.deleteOne({ _id: userId, passwor: password })
        })
        .then(()=> { })
}

module.exports = deleteUser