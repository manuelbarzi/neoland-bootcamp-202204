const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const unregisterUser = require('./unregisterUser')
const createNote = require('./createNote')
const retrieveNote = require('./retrieveNote')
const updateNote = require('./updateNote')
const listNotes = require('./listNotes')
const deleteNote  = require('./deleteNote')
const addComment = require('./addComment')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    unregisterUser,
    createNote,
    retrieveNote,
    updateNote,
    listNotes,
    deleteNote,
    addComment

}