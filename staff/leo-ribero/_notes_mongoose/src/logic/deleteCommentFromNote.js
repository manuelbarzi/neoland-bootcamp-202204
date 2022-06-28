const { NotFoundError } = require("../errors")
const { comment } = require("../models/schemas")
const { index } = require("../models/schemas/user")
const { validateStringNotEmptyNoSpaces } = require("../validators")
const { User, Note} = require('../models')

function deleteCommentFromNote(userId, noteId, commentId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(noteId, 'note id')
    validateStringNotEmptyNoSpaces(commentId, 'comment id')

    return User.findById(userId)
        .then((user) => {
            if (!user) throw new NotFoundError(`user id ${userId} does not found`)

            return Note.findById(noteId)
        })
        .then((note) => {
            if(!note) throw new NotFoundError(`note id ${noteId} does not found`)

            const index = note.comments.findIndex(comment => comment.id === commentId)
            if (index === -1) throw new NotFoundError(`comment with id ${commentId} not found`)

            note.comments.splice(index, 1)
            return note.save()
                .then(() => { })

        })

}

module.exports = deleteCommentFromNote