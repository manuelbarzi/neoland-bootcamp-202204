const authenticateUser = require ('./authenticateUser')
const createUser = require ('./createUser')
const retrieveUser = require ('./retrieveUser')
const retrieveNotes = require ('./retrieveNotes')
const createNote = require ('./createNote')
const deleteNote = require ('./deleteNote')

module.exports = {
    authenticateUser,
    createUser,
    retrieveUser, 
    retrieveNotes,
    createNote,
    deleteNote
}