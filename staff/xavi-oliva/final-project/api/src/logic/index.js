const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const unregisterUser = require('./unregisterUser')
const createFlat = require('./createFlat')
const retrieveFlats = require('./retrieveFlats')
const updateFlat = require('./updateFlat')
const deleteFlat = require('./deleteFlat')
const addBookingToFlat = require('./addBookingToFlat')
const retrieveBookingFromFlat = require('./retrieveBookingFromFlat')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    unregisterUser,
    createFlat,
    retrieveFlats,
    updateFlat,
    deleteFlat,
    addBookingToFlat,
    retrieveBookingFromFlat
}