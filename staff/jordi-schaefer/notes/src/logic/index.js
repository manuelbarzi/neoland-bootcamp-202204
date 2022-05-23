const createUser = require('./createUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const retrieveNotes = require('./retrieveNotes')
const createNote = require('./createNote')
const deleteNote = require('./deleteNote')

module.exports = {
    createUser,
    authenticateUser,
    retrieveUser,
    retrieveNotes,
    createNote,
    deleteNote
}