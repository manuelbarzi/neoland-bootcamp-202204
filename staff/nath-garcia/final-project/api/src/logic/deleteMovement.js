const { User, Movement } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')

function deleteMovement(userId, movementId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(movementId, 'movement id')

    return User.findById(userId).lean()
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Movement.deleteOne({ _id: movementId })
        })
        .then(result => {
            if (!result.deletedCount)
                throw new NotFoundError(`movement with id ${movementId} does not exist`)
        })
        .then(() => { })
}

module.exports = deleteMovement