const { createUser } = require('./createUser')
const { authenticateUser } = require('./authenticateUser')
const { retrieveUser } = require('./retrieveUser')
const { retrieveNotes } = require('./retrieveNotes')
const { saveNote } = require('./saveNote')

saveNote

module.exports = {
    createUser,
    authenticateUser,
    retrieveUser,
    retrieveNotes,
    saveNote
}