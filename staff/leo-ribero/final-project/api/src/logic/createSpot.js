const { User, Spot } = require('../models')
const { NotFoundError } = require('errors')
const { validateStringNotEmptyNoSpaces, validateString } = require('validators')

function createSpot(userId, text) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    if (text != null)  validateString(text, 'text')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Spot.create({ user: userId, text })
        })
        .then(spot => spot.id)
}

module.exports = createSpot