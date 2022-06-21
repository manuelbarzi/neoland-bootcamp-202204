const createUser = require('./createUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require ('./updateUser')
const unregisterUser = require('./unregisterUser')
const addJob = require('./addJob')
const clockUserIn = require('./clockUserIn')
const clockUserOut = require('./clockUserOut')
const retrieveClockUser = require('./retrieveClockUser')
const clockUserJobIn = require('./clockUserJobIn')
const clockUserJobOut = require('./clockUserJobOut')
const retrieveClockJob = require('./retrieveClockJob')
const deleteJob = require('./deleteJob')
const retrieveJobs = require('./retrieveJobs')
const retrieveJobsUser = require('./retrieveJobsUser')
const retrieveUserRol = require('./retrieveUserRol')


module.exports = {
    createUser,
    authenticateUser,
    retrieveUser,
    unregisterUser,
    updateUser,
    addJob, 
    deleteJob,
    retrieveJobs,
    retrieveJobsUser,
    clockUserIn,
    clockUserOut,
    retrieveClockUser,
    clockUserJobIn,
    clockUserJobOut,
    retrieveClockJob,
    retrieveUserRol
         
    




}