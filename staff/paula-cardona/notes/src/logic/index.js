const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const deleteUser = require('./deleteUser')
const createNote = require('./createNote')
const updateNote = require('./updateNote')
const listNotes = require('./listNotes')
const deleteNote = require('./deleteNote')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    deleteUser,
    createNote,
    listNotes,
    updateNote,
    deleteNote
}