const { Note } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')
const { user } = require('../models/schemas')

function retrieveNote(userId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')

    return Note.find({user: userId}).lean()
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} dont have notes`)


            return user
        })
}

module.exports = retrieveNote