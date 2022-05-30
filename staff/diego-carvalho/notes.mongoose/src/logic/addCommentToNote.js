const { Note, User } = require("../models");
const { validateString, validateStringNotEmptyNoSpaces } = require("../validators");

function addCommentToNote(userId, noteId, comment) {
    validateStringNotEmptyNoSpaces(noteId, 'note id')
    validateStringNotEmptyNoSpaces(userId, 'user id')
    if (comment !== null) validateString(comment, ' comment')

    return User.findById(userId).lean()
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Note.find({ note: noteId }).lean()
        })
        .then(note => {
            if (!note) throw new NotFoundError(`note with id ${noteId} does not exist`)


            return Note.comments.push(comment)
        })
        .then(() => {

        })

}

module.exports = addCommentToNote