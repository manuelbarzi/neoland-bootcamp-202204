const { NotFoundError } = require('errors')
const { Clock, User } = require('../models')

function retrieveClockUser(userid) {
    return User.findById(userid)
        .then(user => {
            if (!user)
                throw new NotFoundError('User Not Found')
            return Clock.find({ _user: userid })
        })
        .then(clock => {
            if (clock.length === 0)
                throw new NotFoundError('Clock Not Found')
            return clock
        })
        .catch(error => {
            return error
        })

}

module.exports = retrieveClockUser