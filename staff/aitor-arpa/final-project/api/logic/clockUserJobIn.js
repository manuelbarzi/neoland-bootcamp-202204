const { ConflictError, NotFoundError } = require('errors')
const { User, Clock, Job } = require('../models')
const { validateId } = require('validator')

function clockUserJobIn(userId, jobId) {
    validateId(userId)
    validateId(jobId)

   
    return Promise.all([User.findById(userId), Job.findById(jobId), Clock.findOne({ user: userId, job: jobId , timein: { $ne: null }, timeout: null }) ])
        .then(([user, job, clock]) => {
            
            if (!user)
                throw new NotFoundError(`user with id ${userId} not found`)
            
            if (!job)
                throw new NotFoundError(`job with id ${userId} not found`)

            if (clock)
                throw new ConflictError(`clock with id ${clock.id} for user with id ${userId} and job with id ${jobId} already exists`)

            return Clock.create({ user: userId, job: jobId })
        })
        .then(clock => clock._id)
        
}
module.exports = clockUserJobIn
