const { User, Event } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')


function retrieveTargetedEvent(userId, eventId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(eventId, 'event id')
    debugger
    return User.findById(userId).lean() // vas a tener que hacer populate de events para traerte los events
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)
            console.log(user.events)
            debugger
            return user.events
        })
        .then(events => {
            return events
        })

}

module.exports = retrieveTargetedEvent