const { ConflictError } = require('errors')
const { User, Clock, Job } = require('../models')



function clockUserInJob(userId, jobId) {
    // TODO mirar que exista user y job. mirar que no tiene un clock ya abierto y sin cerrar para esta tarea

    return Promise.all([User.findById(userId), Clock.find({ _job: jobId }), Job.findById(jobId)])
        .then(([user, clock, job]) => {
            if (!user)
                throw new ConflictError(`${userId} not found`)
            if (!job)
                throw new ConflictError(`${userId} job not found`)
            if (clock.timein)
                throw new ConflictError(`${userId} start is clocked`)
            else if (!clock.timein && clock.timeout)
                throw new ConflictError((`${userId} finsh is clocked`))
            if (!clock.timein && !clock.timeout)
                return Clock.create({ user: userId, job: jobId })
            
        })
        .then(clock => {
            return clock._id
        })
        .catch(error => {
            return error
        })
}
module.exports = clockUserInJob
