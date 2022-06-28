const { User, Spot } = require('../models')
const { NotFoundError } = require('errors')
const { validateStringNotEmptyNoSpaces, validateString } = require('validators')

function deleteSpot(userId, spotId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(spotId, 'spot id')

    return User.findById(userId).lean()
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Spot.deleteOne({ _id: spotId })
        })
        .then(result => {
            if (!result.deletedCount)
                throw new NotFoundError(`spot with id ${spotId} does not exist`)
        })
        .then(() => { })

}

module.exports = deleteSpot