const { ConflictError } = require('errors')
const { validateObjectId } = require('validator')
const { User, Clock } = require('../models')

function clockUserIn(userId) {
    
    validateObjectId(userId)

    return Promise.all([User.findById(userId), Clock.findOne({ user: userId, job: null })])
        .then(([user, job]) => {
            if (!user)
                throw new ConflictError(`${userId} not found`) 
            if (!job)
                throw new ConflictError(`${userid} clock no found`)
            if (job.job !== null)
                throw new ConflictError(`${userId} you can't register a job`)
            return Clock.create({ user: userId })
        })
        .then(clock => {
            return clock._id
        })
        .catch(error => {
            return error
        })
}
module.exports = clockUserIn
