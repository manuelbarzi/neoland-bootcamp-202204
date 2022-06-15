const { AuthError, ConflictError } = require('errors')
const { User, Clock } = require('../models')

function ClocUserOut(clockid, user, timeout = new Date) {

    return User.findOne({ _id: user })
        .then(userfind => {
            if (userfind === null)
                return new AuthError(`User not exist`)
            return Clock.updateOne({ _id: clockid }, { $set: { timeout } })
        })

        .then(clock => {
            if (clock.matchedCount === 0)
                return new ConflictError('exit cant registrer')
            return clock
        })
}
module.exports = ClocUserOut
