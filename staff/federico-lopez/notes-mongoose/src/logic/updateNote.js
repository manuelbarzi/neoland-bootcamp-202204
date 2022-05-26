const { ConflictError, NotFoundError } = require("../errors");
const { Note } = require("../models");
const { validateObjectId, validateString } = require("../validators");

function updateNote(noteId, userId, text) {
    validateObjectId(noteId)
    validateObjectId(userId)
    validateString(text)

    return Note.findById(noteId)
        .then(note => {
            if(!note) throw new NotFoundError(`note with id ${noteId} does not exist`)

            if(note.user.toString() !== userId) throw new ConflictError(`note with id ${noteId} does not belong to user with id ${userId}`)

            note.text = text
            return note.save()
        })
        .then(() => {})
}

module.exports = updateNote