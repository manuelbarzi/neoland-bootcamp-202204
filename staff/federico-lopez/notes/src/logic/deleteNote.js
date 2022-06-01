const { validateStringNotEmptyNoSpaces, validateFunction } = require("../validators");
const { readFile, unlink } = require('fs');
const { NotFoundError, ConflictError } = require("../errors");

function deleteNote(userId, noteId, callback) {
    validateStringNotEmptyNoSpaces(noteId)
    validateStringNotEmptyNoSpaces(userId)
    validateFunction(callback)

    readFile(`./db/notes/${noteId}.json`, 'utf8', (error, file) => {
        if (error) return callback(new NotFoundError('note does not exist'))

        const note = JSON.parse(file)

        if (note.user !== userId)
            return callback(new ConflictError('note does not belong to the current user'))

        unlink(`./db/notes/${noteId}.json`, error => {
            if (error) return callback(error)

            callback(null)
        })
    })
}

module.exports = deleteNote