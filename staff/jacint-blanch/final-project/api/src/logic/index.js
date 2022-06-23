const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const createIncidence = require('./createIncidence')
const retrieveIncidenceNearMe = require('./retrieveIncidenceNearMe')


module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    createIncidence,
    retrieveIncidenceNearMe
}