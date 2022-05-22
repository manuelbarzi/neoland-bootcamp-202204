const createUser = require('./createUser')
const authenticateUser = require('./authenticateUser')
const retriveUser = require('./retriveUser')
const deleteUser = require('./deleteUser')
const retrieveNotes = require('./retrieveNotes')
const createNote = require('./createNote')
const updateNote = require ('./updateNote')
const deleteNote = require ('./deleteNote')

module.exports = {
    createUser,
    authenticateUser,
    retriveUser,
    deleteUser,
    retrieveNotes,
    createNote,
    updateNote,
    deleteNote
}