const { Note } = require('../models')
const { validateStringNotEmptyNoSpaces, validateStringNotEmptyOrBlank, validateFunction } = require('../validators')
const { writeFile, access } = require('fs')
const { NotFoundError } = require('../errors')

function createNote(userId, text, callback) {
    validateStringNotEmptyNoSpaces(userId)
    validateStringNotEmptyOrBlank(text, 'note text')
    validateFunction(callback)

    const note = new Note(undefined, userId, text)
    const json = JSON.stringify(note)

    access(`./db/users/${userId}.json`, error => {
        if (error) return callback(new NotFoundError('user does not exist'))

        writeFile(`./db/notes/${note.id}.json`, json, error => {
            if (error) return callback(error)

            callback(null, note.id)
        })
    })
}

module.exports = createNote