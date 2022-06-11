const { User, Spot } = require('../models')
const { NotFoundError } = require('errors')
const { validateStringNotEmptyNoSpaces } = require('validators')

function retrieveSpots(userId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')

    return User.findById(userId).lean()
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Spot.find({ user: userId }).lean()
        })
        .then(spots => {
            spots.forEach(spot => {
                spot.id = spot._id.toString()
                delete spot._id

                delete spot.__v

                delete spot.user
            })

            return spots
        })

}

module.exports = retrieveSpots