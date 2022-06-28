const { User, Flat } = require('../models')
const { NotFoundError } = require('errors')
const { validateStringNotEmptyNoSpaces, validateString } = require('validators')

function createFlat(userId, title, description, address, images) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    if (title != null) validateString(title, 'title')
    if (description != null) validateString(description, 'description')
    if (address != null) validateString(address, 'address')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Flat.create({ user: userId, title, description, address, images })
        })
        .then(flat => flat.id)
}

module.exports = createFlat