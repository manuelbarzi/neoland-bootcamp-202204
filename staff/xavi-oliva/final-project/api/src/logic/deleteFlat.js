const { NotFoundError, ConflictError } = require('errors')
const { validateStringNotEmptyNoSpaces } = require('validators')
const { Flat } = require("../models")

function deleteFlat(userId, flatId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(flatId, 'flat id')
    
    return Flat.findById(flatId)
        .then((flat) => {
            if (!flat) throw new NotFoundError(`flat with id ${flatId} does not exist`)
            if (flat.user.toString() !== userId) throw new ConflictError(`flat with id ${flatId} does not belong to user with id ${userId}`)

            return Flat.deleteOne({ _id: flatId, user: userId })
        })
        .then(() => {})
}

module.exports = deleteFlat