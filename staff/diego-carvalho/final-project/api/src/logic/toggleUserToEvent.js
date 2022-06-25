const { User, Event } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')

function toggleUserToEvent(userId, eventId) {
  validateStringNotEmptyNoSpaces(userId, 'user id')
  validateStringNotEmptyNoSpaces(eventId, 'event id')

  return User.findById(userId)
    .then(user => {
      if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

      return Event.findById(eventId)
    })
    .then(event => {
      if (!event) throw new NotFoundError(`event with id ${eventId} does not exist`)

      const index = event.participants.findIndex(_userId => _userId._id.toString() === userId)
      if (index < 0)
        event.participants.push(userId)
      else
        event.participants.splice(index, 1)

      return event.save()
    })
    .then(() => { })
}

module.exports = toggleUserToEvent