const { User, Movement } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')

function retrieveMovements(userId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')

    return User.findById(userId).lean()
    .then(user => {
        if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

                return Movement.find({ user: userId }).lean()
    })
    .then(movements => {
        movements.forEach(movement => {
            movement.id = movement._id.toString()

            delete movement._id.toString
            
            delete movement.__v

            delete movement.user
        })

        return movements
    })
}

module.exports = retrieveMovements
