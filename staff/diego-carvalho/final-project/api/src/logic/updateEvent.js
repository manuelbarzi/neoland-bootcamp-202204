const { User, Event } = require('../models')
const { validateStringNotEmptyNoSpaces, validateString } = require('../validators')
const { NotFoundError } = require('../errors')

function updateEvent(userId, eventId, title, description) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(eventId, 'event id')
    validateString(title, 'title')
    validateString(description, 'description')


    return User.findById(userId)
        .then((user) => {
            if (!user) throw new NotFoundError(`owner id ${userId} does not exist`)

            return Event.findById(eventId).lean()
        })
        .then((event) => {
            if (!event) throw new NotFoundError(`event with id ${eventId} does not exist`)

            return Event.updateOne({ _id: eventId, owner: userId }, { $set: { title, description } })
        })
        .then(() => { })

}

module.exports = updateEvent