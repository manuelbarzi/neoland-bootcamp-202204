const { User, Movement } = require('../models')
const { NotFoundError, AuthError } = require('../errors')
const { validateStringNotEmptyNoSpaces, validateString, validateNumber } = require('../validators')

function updateMovement(userId, movementId, type, category, concept, amount, accountId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(movementId, 'movement id')
    validateString(type)
    validateNumber(category)
    if (concept != null) validateString(concept)
    validateNumber(amount)
    if (accountId != null) validateStringNotEmptyNoSpaces(accountId, 'account id')

    return User.findById(userId, movementId, type, category, concept, amount, accountId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Movement.findById(movementId)
        })
        .then(movement => {
            if (!movement)
                throw new NotFoundError(`note with id ${noteId} does not exist`)

            if (movement.user.toString() !== userId)
                throw new AuthError(`note with id ${noteId} does not belong to user with id ${userId}`)

            movement.type = type
            movement.category = category
            movement.concept = concept
            movement.amount = amount

            return movement.save()
        })
        .then(() => { })
}

module.exports = updateMovement