const createUser = require('./createUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const retrieveNotes = require('./retrieveNotes')
const saveNote = require('./createNote')

module.exports = {
    createUser,
    authenticateUser,
    retrieveUser,
    retrieveNotes,
    saveNote
}