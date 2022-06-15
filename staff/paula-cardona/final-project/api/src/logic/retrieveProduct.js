const { User, Product} = require ('../models')
const { NotFoundError } = require ('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')

function retrieveProduct (productId) {
    validateStringNotEmptyNoSpaces(productId, 'product id')

    return User.findById(userId)
        .then((user) => {
            if(!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Product.findById(productId)
        })
        .then((product) => {
            return product     
        })
}

module.exports = retrieveProduct 