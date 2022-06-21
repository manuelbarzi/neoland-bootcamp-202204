const { User, Account } = require('../models')
const { NotFoundError, AuthError } = require('../errors')
const { validateStringNotEmptyNoSpaces, validateString, validateNumber } = require('../validators')

function updateAccount(userId, accountId, type, text) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(accountId, 'account id')
    if (type != null) validateNumber(type)
    if (text != null) validateString(text, 'text')

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Account.findById(accountId)
        })
        .then(account => {

            if (!account)
                throw new NotFoundError(`account with id ${accountId} does not exist`)

            if (account.user.toString() !== userId)
                throw new AuthError(`account with id ${accountId} does not belong to user with id ${userId}`)

            account.type = type
            account.text = text

            return account.save()
        })
        .then(() => { })
}

module.exports = updateAccount