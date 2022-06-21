const { ConflictError, NotFoundError } = require('errors')
const { User, Clock } = require('../models')
const { validateId } = require('validator')

function clockUserOut(userId, clockId) {
    validateId(userId)
    validateId(clockId)

    return Promise.all([User.findById(userId), Clock.findById(clockId)])
        .then(([user, clock]) => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} not found`)

            if (!clock)
                throw new NotFoundError(`clock with id ${clockId} not found for user with id ${userId}`)

            if (clock.user.toString() !== userId)
                throw new ConflictError(`clock with id ${clockId} does not correspond to user with id ${userId}`)
               
            if (!clock.timein)
                throw new ConflictError(`clock with id ${clockId} does not have timein`)

            if (clock.timeout)
                throw new ConflictError(`clock with id ${clockId} already has timeout`)

            clock.timeout = new Date

            return clock.save()
        })
        .then(() => { })
}
module.exports = clockUserOut
