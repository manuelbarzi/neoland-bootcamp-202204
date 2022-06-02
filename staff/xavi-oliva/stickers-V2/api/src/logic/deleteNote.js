const { User, Note } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')

function deleteNote(userId, noteId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(noteId, 'note id')

    return User.findById(userId)
        .then((user) => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Note.findById(noteId)
        })
        .then((note) => {
            if (!note) throw new NotFoundError(`note with id ${noteId} does not exist`)

            return Note.deleteOne({ _id: noteId, user: userId })
        })
        .then(() => { })
}
module.exports = deleteNote