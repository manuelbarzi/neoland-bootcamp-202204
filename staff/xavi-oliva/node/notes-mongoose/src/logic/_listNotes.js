const { User, Note } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')

function listNotes(userId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with ${userId} does no exist`)

            return Note.find({user: userId}).lean()
        })
        .then(notes => {
            // plane objects array
            return notes
        })
}

module.exports = { _listNotes }