const { User, Product } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')

function retrieveProductsOfType(userId, type) {
    validateStringNotEmptyNoSpaces(userId, 'userId')

    debugger
    return User.findById(userId)

        .then((user) => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Product.find({ type })
        })



}
module.exports = retrieveProductsOfType
