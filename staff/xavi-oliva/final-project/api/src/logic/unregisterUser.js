const { AuthError, NotFoundError } = require("errors");
const { User } = require("../models");
const { validateStringNotEmptyNoSpaces, validatePassword } = require("validators");

async function unregisterUser(userId, password) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validatePassword(password)

    const result = await User.findById(userId)

    if (result === null) throw new NotFoundError(`user with id ${userId} not found`)

    if (result.password !== password) throw new AuthError('wrong credentials')

    await User.deleteOne({ _id: userId })
}

module.exports = unregisterUser