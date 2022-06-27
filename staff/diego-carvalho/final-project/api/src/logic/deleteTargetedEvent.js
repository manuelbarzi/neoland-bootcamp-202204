const { NotFoundError } = require("../errors")
const { validateStringNotEmptyNoSpaces } = require("../validators")
const { User, Event } = require('../models')

function deleteTargetedEvent(userId, eventId) {
  debugger
  validateStringNotEmptyNoSpaces(userId, 'user id')
  validateStringNotEmptyNoSpaces(eventId, 'event id')
  return User.findById(userId)
    .then((user) => {
      if (!user) throw new NotFoundError(`user id ${userId} does not found`)

      const index = user.events.find(_eventId => _eventId.toString() === eventId)
      if (index === undefined) throw new NotFoundError(`event with id ${eventId} does not exist`)

      user.events.splice(index, 1)

      return user.save()
    })
    .then(() => {
      return Event.findById(eventId)
    })
    .then((event) => {
      if (!event) throw new NotFoundError(`event id ${eventId} does not found`)

      const index = event.participants.find(_userId => _userId.toString() === userId)
      if (index === undefined) throw new NotFoundError(`user with id ${userId} does not exist`)

      event.participants.splice(index, 1)

      return event.save()
    })
    .then(() => { })

}

module.exports = deleteTargetedEvent