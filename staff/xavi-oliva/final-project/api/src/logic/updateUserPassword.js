const { User } = require('../models')
const { NotFoundError, ConflictError } = require('errors')
const { validateStringNotEmptyNoSpaces, validatePassword } = require('validators')

async function updateUserPassword (userId, oldPassword, password) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validatePassword(oldPassword, 'previous password')
    validatePassword(password, 'new password')

    if (oldPassword === password) throw new ConflictError('previous and new password are the same')

    const user = await User.findById(userId)

    if(!user) throw new NotFoundError(`user with id ${userId} does not exist`)
    
    if(user.password !== oldPassword) throw new AuthError('wrong credentials')

    const result = await User.updateOne({ _id: userId }, { $set: { password } })

    if (result.matchedCount === 0) throw new NotFoundError(`user with id ${userId} does not exist`)
}

module.exports = updateUserPassword