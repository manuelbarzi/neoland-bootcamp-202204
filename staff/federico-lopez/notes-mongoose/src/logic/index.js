const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const createNote = require('./createNote')
const deleteUser = require('./deleteUser')
const listNotes = require('./listNotes')
const updateNote = require('./updateNote')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    createNote,
    deleteUser,
    listNotes,
    updateNote
}