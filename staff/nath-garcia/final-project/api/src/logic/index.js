const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const deleteUser = require('./deleteUser')
const addMovement = require('./addMovement')
const retrieveMovements = require('./retrieveMovements')
const updateMovement = require('./updateMovement')
const deleteMovement = require('./deleteMovement')
const createAccount = require('./createAccount')
const retrieveAccounts = require('./retrieveAccounts')
const updateAccount = require('./updateAccount')
const deleteAccount = require('./deleteAccount')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    deleteUser,
    addMovement,
    retrieveMovements,
    updateMovement,
    deleteMovement,
    createAccount,
    retrieveAccounts,
    updateAccount,
    deleteAccount
}