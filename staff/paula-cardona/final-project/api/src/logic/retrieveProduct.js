const { User, Product} = require ('../models')
const { NotFoundError } = require ('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')

function retrieveProduct (userId, productId) {
    validateStringNotEmptyNoSpaces(productId, 'product id')

    return User.findById(userId)
        .then((user) => {
            if(!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Product.findById(productId)
        })
        .then((product) => {
            if(!product) throw new NotFoundError(`product with id ${productId} does not exist`)
            
            product.id = product._id.toString()

            delete product._id
            delete product.__v
            
            return product     
        })
}

module.exports = retrieveProduct 