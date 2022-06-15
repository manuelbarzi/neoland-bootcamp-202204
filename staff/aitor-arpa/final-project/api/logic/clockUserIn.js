const { AuthError } = require('errors')
const { User, Clock } = require('../models')


function ClocUserin(user, timein = new Date) {

    return User.findOne({ _id: user })
        .then(userfind => {
            if (userfind === null)
                return new AuthError(`User not exist`)
            return Clock.create({ user, timein })
        })

        .then(clock => {
            return clock
        })
}
module.exports = ClocUserin
