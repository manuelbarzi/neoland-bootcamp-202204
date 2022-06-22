const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const deleteUser = require('./deleteUser')
const createEvent = require('./createEvent')
const retrieveEvent = require('./retrieveEvent')
const retrieveOwnerEvent = require('./retrieveOwnerEvent')
const updateEvent = require('./updateEvent')
const deleteEvent = require('./deleteEvent')
const addEventToUser = require('./addEventToUser')
const toggleUserToEvent = require('./toggleUserToEvent')
const retrieveTargetedEvent = require('./retrieveTargetedEvent')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    deleteUser,
    createEvent,
    retrieveEvent,
    retrieveOwnerEvent,
    updateEvent,
    deleteEvent,
    addEventToUser,
    toggleUserToEvent,
    retrieveTargetedEvent

}