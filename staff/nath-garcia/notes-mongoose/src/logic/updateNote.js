const { User, Note } = require('../models')
const { NotFoundError } = require('../errors')
const {validateStringNotEmptyNoSpaces, validateString } = require('../validators') 


function updateNote(userId, noteId, text) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateString(text, 'text')

    return Note.findById(noteId)
    .then((note) => {
        if (!note) { 
            throw new NotFoundError(`note with id ${noteId} does not exist`)
        }
        return User.findById(userId)
    })

    .then((user) => {
        if (!user) {
            throw new NotFoundError(`user with id ${userId} does not exist`)
        }

        return Note.updateOne({ _id: noteId, user: userId}, { $set: { text: text }})
    })
    .then(() => {})
}

module.exports = updateNote