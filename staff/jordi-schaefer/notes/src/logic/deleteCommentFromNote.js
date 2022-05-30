const { User, Note } = require('../models')
const { NotFoundError, AuthError } = require('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')

function deleteCommentFromNote(userId, noteId, commentId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(noteId, 'note id')
    validateStringNotEmptyNoSpaces(commentId, 'comment id')
    debugger
    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Note.findById(noteId)
        })
        .then(note => {
            if (!note) throw new NotFoundError(`note with id ${noteId} does not exist`)

            const comment= note.comments.find(comment => comment._id.toString() === commentId)
            
            if (comment == null) throw new NotFoundError(`comment with id ${commentId} does not exist`)
            else if (comment.user.toString() !== userId) throw new AuthError(`comment does not belong to user with id ${userId}`)  
            
            index = note.comments.findIndex(comment => comment._id.toString() === commentId)
            note.comments.splice(index, 1)

            return note.save()
        })
        .then(() => {  })
}

module.exports = deleteCommentFromNote