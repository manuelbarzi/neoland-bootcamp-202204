const { NotFoundError } = require("../errors")
const { validateStringNotEmptyNoSpaces } = require("../validators")
const { Event } = require('../models')

function deleteEventParticipant(eventId, userId) {
    validateStringNotEmptyNoSpaces(eventId, 'event id')
    validateStringNotEmptyNoSpaces(userId, 'user id')

    return Event.findById(eventId).populate('participants')
        .then((event) => {
            if (!event) throw new NotFoundError(`event id ${eventId} does not found`)

            const index = event.participants.find(_userId => _userId._id.toString() === userId)
            if (index === undefined) throw new NotFoundError(`user with id ${userId} does not exist`)

            event.participants.splice(index, 1)

            return event.save()

        })
        .then(() => { })

}

module.exports = deleteEventParticipant