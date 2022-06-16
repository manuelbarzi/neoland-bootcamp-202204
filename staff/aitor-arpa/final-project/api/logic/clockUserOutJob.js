const { AuthError, NotFoundError } = require('errors')
const { User, Clock, Job } = require('../models')
const { validateObjectId } = require('validator')



function clockUserOutJob(userId, jobId, clockId) {
    validateObjectId(userId)
    validateObjectId(jobId)
    validateObjectId(clockId)

    // TODO mirar que existe todo: user, job y clock, y que son coherentes, es decir, estan relacionados entre si. 
    // TODO y mirar que el clock no este cerrado ya.

    return Promise.all([User.findById(userId), Clock.findById(clockId), Job.findById(jobId)])
        .then(([user, clock, job]) => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)
            if (!clock)
                throw new NotFoundError(`clock for user with id ${userId} and job with id ${jobId} does not exist`)
            if (!job)
                throw new NotFoundError(`job for id ${jobId} for user with id ${userId} does exist`)
            if (clock.timeout)
                throw new AuthError(`clock for id ${clockId} finidh cloked`)
            if (!clock.timeout)
                return Clock.updateOne({ _id: clockId }, { $set: { timeout: new Date } })
            if (!clock.timein)
                throw new AuthError(`clock for id ${clockId} finidh cloked`)
            if (clock.timeout)
                throw new AuthError(`clock for id ${clockId} finidh cloked`)
            if (clock.job !== jobId)
                throw new NotFoundError(`clock for id ${clockId} for job with id ${jobId} does exist`)
            if (clock.user !== userId)
                throw new NotFoundError(`clock for id ${clockId} for user with id ${userId} does exist`)
            if (clock.timein && !clock.timeout && clock.user === userId && clock.job === jobId) {
                clock.timout = new Date
                return clock.save()
            }

        })

        .catch(error => {
            return error
        })
}
module.exports = clockUserOutJob
