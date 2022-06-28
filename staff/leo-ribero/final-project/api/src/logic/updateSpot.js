const { User, Spot } = require('../models')
const { NotFoundError } = require('errors')
const { validateStringNotEmptyNoSpaces, validateString } = require('validators')

function updateSpot(userId, spotId, text) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(spotId, 'spot id')
    validateString(text, 'text')

    return User.findById(userId).lean()
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Spot.findById(spotId)
        })
        .then(spot => {
            if (!spot)
                throw new NotFoundError(`spot with id ${spotId} does not exist`)

            if (spot.user.toString() !== userId)
                throw new AuthError(`spot with id ${spotId} does not belong to user with id ${userId}`)

            spot.text = text

            return spot.save()
        })
        .then(() => {})

}

module.exports = updateSpot