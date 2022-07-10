const { User, Account } = require('../models')
const { NotFoundError } = require('../errors')
const { validateString, validateStringNotEmptyNoSpaces, validateNumber } = require('../validators')

function createAccount(userId, type, text) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    if (type != null) validateNumber(type)
    if (text != null) validateString(text, 'text')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Account.create({ user: userId, type, text })
        })
        .then(account => account.id)
}

module.exports = createAccount