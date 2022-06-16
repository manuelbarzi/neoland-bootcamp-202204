const { User, Product } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')

function retrieveProductsOfType(userId, type) {
    validateStringNotEmptyNoSpaces(userId, 'product id')


    return User.findById(userId)
        .then((user) => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Product.find({ type }).lean()
        })



}
module.exports = retrieveProductsOfType
