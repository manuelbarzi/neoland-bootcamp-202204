const { User, Note } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')

function retrievePublicNotes(userId, noteId, audience) {
    validateStringNotEmptyNoSpaces(userId, 'user id')

    return User.findById(userId).lean()
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Note.find({ note: noteId, text, audience})
        })
        .then(note => {
            if (!note)
                throw new NotFoundError(`this note with ${noteId} mood does not exist`)

            if (note.audience.enum === 1)
                throw new NotFoundError(`note with this ${audience} does not exist`)
            audience = note.audience.enum

            return audience
        })

}

module.exports = retrievePublicNotes