const { User, Note, Reaction } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')

function toggleReactionOnNote(userId, noteId, type) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(noteId, 'note id')
    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Note.findById(noteId)
        })
        .then(note => {
            if (!note) throw new NotFoundError(`note with id ${noteId} does not exist`)

            const index = note.reactions.findIndex(reaction => reaction.user.toString() === userId)
            if (index < 0) {
                const reaction = new Reaction({ user: userId, type: type })
                note.reactions.push(reaction)
            }
            else
                note.reactions.splice(index, 1)
            return note.save()
        })
        .then(() => {  })
}
module.exports = toggleReactionOnNote