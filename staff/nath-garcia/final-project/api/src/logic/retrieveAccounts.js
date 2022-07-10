const { User, Account } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces} = require('../validators')

function retrieveAccounts(userId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')

    return User.findById(userId).lean()
    .then(user => {
        if (!user)
        throw new NotFoundError(`user with id ${userId} does not exist`)

        return Account.find({ user: userId }).lean()
    })
    .then(accounts => {
        accounts.forEach(account => {
           account.id = account._id.toString() 

           delete account._id.toString

           delete account.__v

           delete account.user
        })

        return accounts
    })
}

module.exports = retrieveAccounts