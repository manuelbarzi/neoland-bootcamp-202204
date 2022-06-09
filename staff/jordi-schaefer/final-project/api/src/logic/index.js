const addComment = require('./addComment')
const authenticateUser = require('./authenticateUser')
const createActivity = require('./createActivity')
const deleteActivity = require('./deleteActivity')
const deleteComment = require('./deleteComment')
const deleteUser = require('./deleteUser')
const registerUser = require('./registerUser')
const retrieveActivities = require('./retrieveActivities')
const retrieveUser = require('./retrieveUser')
const retrieveUserActivities = require('./retrieveUserActivities')
const toggleLikeOnActivity = require('./toggleLikeOnActivity')
const updateUserData = require('./updateUserData')

module.exports = {
    addComment,
    authenticateUser,
    createActivity,
    deleteActivity,
    deleteComment,
    deleteUser,
    registerUser,
    retrieveActivities,
    retrieveUser,
    retrieveUserActivities,
    toggleLikeOnActivity,
    updateUserData
}