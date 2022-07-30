const { AuthError, NotFoundError } = require("errors")
const { User } = require("../models")
const { validatePassword } = require("validators")
const { validateObjectId } = require('../validators')
const bcrypt = require('bcryptjs')

module.exports = async (userId, password) => {
    validateObjectId(userId)
    validatePassword(password)

    const result = await User.findById(userId)

    if (result === null) throw new NotFoundError(`user with id ${userId} not found`)

    const match = await bcrypt.compare(password, result.password)

    if (!match) throw new AuthError('wrong credentials')

    await User.deleteOne({ _id: userId })
}