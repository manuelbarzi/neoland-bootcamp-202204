const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const deleteUser = require('./deleteUser')
const createNote = require('./createNote')
const deleteNote = require('./deleteNote')
const listNotes = require('./listNotes')
const updateNote = require('./updateNote')
const saveSecret = require('./saveSecret')
const deleteSecret = require('./deleteSecret')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    deleteUser,
    createNote,
    deleteNote,
    listNotes,
    updateNote,
    saveSecret,
    deleteSecret
}