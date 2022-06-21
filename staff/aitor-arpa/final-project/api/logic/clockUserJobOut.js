const { NotFoundError, ConflictError } = require('errors')
const { User, Clock, Job } = require('../models')
const { validateId } = require('validator')



function clockUserJobOut(userId, jobId, clockId) {
    validateId(userId)
    validateId(jobId)
    validateId(clockId)

    return Promise.all([User.findById(userId), Clock.findById(clockId), Job.findById(jobId)])
        .then(([user, clock, job]) => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)
            if (!clock)
                throw new NotFoundError(`clock for user with id ${userId} and job with id ${jobId} does not exist`)
            if (!job)
                throw new NotFoundError(`job for id ${jobId} for user with id ${userId} does exist`)
            if (clock.user.toString() !== userId)
                throw new ConflictError(`clock with id ${clockId} does not correspond to user with id ${userId}`)
            if (clock.job.toString() !== jobId)
                throw new ConflictError(`clock with id ${clockId} does not correspond to job with id ${jobId}`)
            if (!clock.timein)
                throw new ConflictError(`clock with id ${clockId} does not have timein`)
            if (clock.timeout)
                throw new ConflictError(`clock for id  ${clockId} already has timeout`)

            clock.timeout = new Date

            return clock.save()


        })


}
module.exports = clockUserJobOut
