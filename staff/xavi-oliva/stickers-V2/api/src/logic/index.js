const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const unregisterUser = require('./unregisterUser')
const createNote = require('./createNote')
const retrieveNotes = require('./retrieveNotes')
const updateNote = require('./updateNote')
const deleteNote = require('./deleteNote')
const addCommentToNote = require('./addCommentToNote')
const deleteCommentFromNote = require('./deleteCommentFromNote')
const retrievePublicNotes = require('./retrievePublicNotes')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    unregisterUser,
    createNote,
    retrieveNotes,
    updateNote,
    deleteNote,
    addCommentToNote,
    deleteCommentFromNote,
    retrievePublicNotes
}