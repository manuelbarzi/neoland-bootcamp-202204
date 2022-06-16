const { ConflictError, NotFoundError } = require('errors')
const { User, Clock } = require('../models')
const { validateObjectId } = require('validator')

function clockUserOut(userId, clockId) {
    validateObjectId(userId)
    validateObjectId(clockId)

    return Promise.all([User.findById(userId), Clock.findById(clockId)])// promise all with search clock
        .then(([user, clock]) => {
            if (!user)
                return new NotFoundError(`${userId} not found`)
            if (!clock)
                return new NotFoundError(`${clockId} not found`)
            /*   if (clock.user.toSrting() !== userId)
                  throw new ConflictError(`${clockId}this does not belong to ${userId}`) */
            if (!clock.timein)
                throw new ConflictError(`${clockId} need clocked in`)
            if (clock.timein && !clock.timeout && clock.user.toString() === userId)
                return Clock.updateOne({ _id: clockId }, { $set: { timeout: new Date } })
            if (!clock.timein)
                throw new ConflictError(`${clockId} need clocked in`)
            if (clock.timein && clock.timeout)
                throw new ConflictError(`${clockId} clocked finsh register`)
            if (clock.timein && !clock.timeout)
                return Clock.updateOne({ _id: clockId }, { $set: { timeout: new Date } })

        })

        .then(clock => {
            if (clock.matchedCount === 0)
                return new ConflictError('exit cant registrer')
            return clock
        })
        .catch(() => { })
}
module.exports = clockUserOut
