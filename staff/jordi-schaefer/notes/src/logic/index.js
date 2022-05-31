const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const deleteUser = require('./deleteUser')
const createNote = require('./createNote')
const deleteNote = require('./deleteNote')
const listNotes = require('./listNotes')
const retrievePublicNotes = require('./retrievePublicNotes')
const updateNote = require('./updateNote')
const addCommentToNote = require('./addCommentToNote')
const deleteCommentFromNote = require('./deleteCommentFromNote')
const toggleReactionOnNote = require('./toggleReactionOnNote')
const toggleReactionOnComment = require('./toggleReactionOnComment')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    deleteUser,
    createNote,
    deleteNote,
    listNotes,
    retrievePublicNotes,
    updateNote,
    addCommentToNote,
    deleteCommentFromNote,
    toggleReactionOnNote,
    toggleReactionOnComment
}