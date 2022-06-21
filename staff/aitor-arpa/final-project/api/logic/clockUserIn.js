const { ConflictError } = require('errors')
const { validateId } = require('validator')
const { User, Clock } = require('../models')

function clockUserIn(userId) {
    validateId(userId)

    return Promise.all([User.findById(userId), Clock.findOne({ user: userId, job: null, timein: { $ne: null }, timeout: null })])
        .then(([user, clock]) => {
            if (!user)
                throw new ConflictError(`${userId} not found`)

            if (clock)
                throw new ConflictError(`clock in already exists`)

            return Clock.create({ user: userId, job: null, timeout: null  })
        })
        .then(clock => {
            return clock._id
        })
}
module.exports = clockUserIn
