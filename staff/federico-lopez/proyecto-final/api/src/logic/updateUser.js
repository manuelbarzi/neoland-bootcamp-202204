const { User } = require('../models')
const { NotFoundError } = require('../errors')
const { validateObjectId, validateStringNotEmptyOrBlank, validateDate} = require('../validators')

async function updateUser({ userId, name, surname, dateOfBirth }) {
    validateObjectId(userId)
    debugger
    if (name) validateStringNotEmptyOrBlank(name, 'name')
    if (surname) validateStringNotEmptyOrBlank(surname, 'surname')
    if (dateOfBirth) dateOfBirth = new Date(dateOfBirth)

    const result = await User.updateOne({ _id: userId }, { $set: { name, surname, dateOfBirth } })

    if (result.matchedCount === 0) throw new NotFoundError(`user with id ${userId} not found`)
}

module.exports = updateUser