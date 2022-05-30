const { Note, User, Comment } = require("../models");
const { validateString, validateStringNotEmptyNoSpaces } = require("../validators");
const { NotFoundError } = require('../errors');
const { note } = require("../models/schemas");

function addCommentToNote(userId, noteId, comment) {
    validateStringNotEmptyNoSpaces(noteId, 'note id')
    validateStringNotEmptyNoSpaces(userId, 'user id')
    if (comment !== null) validateString(comment, ' comment')
    debugger
    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Note.findById(noteId)
        })
        .then(note => {
            if (!note)
                throw new NotFoundError(`note with id ${noteId} does not exist`)

            const userComment = new Comment({ user: userId, text: comment })
            note.comments.push(userComment)

            return note.save()
                .then(() => {
                    return comment.id
                })
        })




}

module.exports = addCommentToNote