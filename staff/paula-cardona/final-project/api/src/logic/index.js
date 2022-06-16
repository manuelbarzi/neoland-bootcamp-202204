const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const deleteUser = require('./deleteUser')
const addProductToSchedule = require('./addProductToSchedule')
const removeProductfromSchedule = require('./removeProductfromSchedule')
const retrieveSchedule = require('./retrieveSchedule')
const retrieveProductsOfType = require('./retrieveProductsOfType')
const updateProductQuantityinSchedule = require('./updateProductQuantityinSchedule')


module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    deleteUser,
    addProductToSchedule,
    removeProductfromSchedule,
    retrieveSchedule,
    updateProductQuantityinSchedule,
    retrieveProductsOfType
    
}