const { User, Account } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')

function deleteAccount(userId, accountId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(accountId, 'account id')

    return User.findById(userId).lean()
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Account.deleteOne({ _id: accountId })
        })
        .then(result => {
            if (!result.deletedCount)
                throw new NotFoundError(`account with id ${accountId} does not exist`)
        })
        .then(() => { })
}

module.exports = deleteAccount