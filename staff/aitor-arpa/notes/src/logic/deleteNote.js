const { unlink, access } = require('fs')
const { NotFoundError } = require('../errors')



function deleteNote(noteID, userId, callback) {
    access(`./db/users/${userId}.json`, error => {
        if (error) return callback(new NotFoundError(`User not found`))

        unlink(`./db/notes/${noteID}.json`, error => {
            if (error) return callback(new NotFoundError("Note not exist"))
debugger
            return callback(null)

        })
    })
}

module.exports = deleteNote
