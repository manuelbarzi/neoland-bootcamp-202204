const { NotFoundError } = require('errors')
const { Flat, User } = require("../models")
const { validateStringNotEmptyNoSpaces } = require('validators')

function retrieveFlats(userId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')

    return User.findById({ _id: userId })
        .then(result => {
            if (result === null) throw new NotFoundError(`user with id ${userId} does not exist`)
        })
        .then(() => {
            return Flat.find({ user: userId }).lean()
        })
        .then(flats => {
            flats.forEach(flat => {
                flat.id = flat._id.toString()

                delete flat._id
                delete flat.user
                delete flat.__v
                return flat
            })
            return flats
        })
}

module.exports = retrieveFlats