const { Note } = require ('../models')
const { NotFoundError, ConflictError } = require ('../errors')
const { validateStringNotEmptyNoSpaces, validateString } = require('../validators')


function updateNote(userId, noteId, text) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(noteId, 'note id')
    if (text != null)  validateString(text, 'text')


    return Note.findById(noteId)    
        .then((note) => {
            if(!note) throw new NotFoundError(`note with id ${noteId} does not exist`)

            if(note.user.toString() !== userId) throw new ConflictError(`note with id ${noteId} does not belong to user with id ${userId}`)

            return Note.updateOne({ _id: noteId, user: userId },{ $set: {text}})   
        })
        .then(( ) => { })     
}


module.exports = updateNote