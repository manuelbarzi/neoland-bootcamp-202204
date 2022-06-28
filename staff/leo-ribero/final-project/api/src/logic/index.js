const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const createSpot = require('./createSpot')
const retrieveSpots = require('./retrieveSpots')
const updateSpot = require('./updateSpot')
const deleteSpot = require('./deleteSpot')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    createSpot,
    retrieveSpots,
    updateSpot,
    deleteSpot
}