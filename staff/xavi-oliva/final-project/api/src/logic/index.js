const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const updateUserPassword = require('./updateUserPassword')
const unregisterUser = require('./unregisterUser')
const createFlat = require('./createFlat')
const retrieveFlats = require('./retrieveFlats')
const retrieveFlat = require('./retrieveFlat')
const updateFlat = require('./updateFlat')
const deleteFlat = require('./deleteFlat')
const createBooking = require('./createBooking')
const retrieveBookings = require('./retrieveBookings')
const deleteBooking = require('./deleteBooking')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    updateUserPassword,
    unregisterUser,
    createFlat,
    retrieveFlats,
    retrieveFlat,
    updateFlat,
    deleteFlat,
    createBooking,
    retrieveBookings,
    deleteBooking
}