const { NotFoundError } = require('errors')
const { Flat, User } = require("../models")
const { validateStringNotEmptyNoSpaces } = require('validators')

function retrieveFlat(userId, flatId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(flatId, 'flat id')

    return User.findById(userId)
        .then((user) => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Flat.findById(flatId)
        })
        .then(flat => {
            if (!flat) throw new NotFoundError(`flat with id ${flatId} does not exist`)

            flat.id = flat._id.toString()

            delete flat.__v
            delete flat._id

            return flat
        })
}

module.exports = retrieveFlat