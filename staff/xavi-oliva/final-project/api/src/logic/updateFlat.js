const { Flat } = require('../models')
const { NotFoundError, ConflictError } = require('errors')
const { validateStringNotEmptyNoSpaces, validateString } = require('validators')

function updateFlat(userId, flatId, title, description, address, images) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(flatId, 'flat id')
    if (title != null) validateString(title, 'title')
    if (description != null) validateString(description, 'description')
    if (address != null) validateString(address, 'address')

    return Flat.findById(flatId)
        .then(flat => {
            if(!flat) throw new NotFoundError(`flat with id ${flatId} does not exist`)

            if((flat.title === title && flat.description === description && flat.address === address && flat.images === images) || (flat.title == null && flat.description == null && flat.address == null && flat.images == null)) return

            if(flat.user.toString() !== userId) throw new ConflictError(`flat with id ${flatId} does not belong to user with id ${userId}`)

            if (title) flat.title = title
            if (description) flat.description = description
            if (address) flat.address = address
            if (images) flat.images = images
            
            return flat.save()
        })
        .then(() => {})
}

module.exports = updateFlat