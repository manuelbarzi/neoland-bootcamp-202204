const { Note } = require ('../models')
const { NotFoundError, ConflictError } = require ('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')


function deleteNote(userId, noteId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(noteId, 'note id')

    return Note.findById(noteId)    
        .then((note) => {
            if(!note) throw new NotFoundError(`note with id ${noteId} does not exist`)

            if (note.user.toString() !== userId) throw new ConflictError(`note with id ${noteId} does not belong to user with id ${userId}`)


            return Note.deleteOne({ _id: noteId, user: userId })     
        })
        .then(() => { })     
}


module.exports = deleteNote