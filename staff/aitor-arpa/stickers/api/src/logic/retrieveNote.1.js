const { Note, User } = require('../models')
const { NotFoundError, AuthError } = require('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')

// Esete espera el userId y el noteId y solo trae la nota en concreto no array
function retrieveNote(userId, noteId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(noteId, 'note id')
    return User.findOne({ _id: userId })
    .then(user => {
        if (!user)
            throw new AuthError('wrong credentials')

        return Note.findById({_id: noteId})
    })
    .then(note => {
        if(!note)
        throw new NotFoundError('Not Found Notes')
        
        return note
    })
}
module.exports = retrieveNote