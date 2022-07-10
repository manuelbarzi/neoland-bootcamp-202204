const { User, Movement } = require('../models')
const { NotFoundError } = require('../errors')
const { validateString, validateStringNotEmptyNoSpaces, validateNumber } = require('../validators')

function addMovement(userId, type, category, concept, amount, accountId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateString(type, 'type')
    validateNumber(category)
    if (concept != null) validateString(concept)
    validateNumber(amount)
    if (accountId != null)validateStringNotEmptyNoSpaces(accountId, 'account id')

    return User.findById(userId)
        .then(user => {
            if(!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Movement.create({ user: userId, type, category, concept, amount, accountId })
        })
        .then(movement => movement.id)
}

module.exports = addMovement