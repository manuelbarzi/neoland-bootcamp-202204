const { NotFoundError, ConflictError } = require("../errors")
const { validateStringNotEmptyNoSpaces } = require("../validators")
const { User } = require('../models')

function deleteTargetedEvent(userId, eventId) {
  validateStringNotEmptyNoSpaces(userId, 'user id')
  validateStringNotEmptyNoSpaces(eventId, 'event id')
  debugger
  return User.findById(userId).populate('events').lean()
    .then((user) => {
      if (!user) throw new NotFoundError(`user id ${userId} does not found`)

      const index = user.events.find(_eventId => _eventId._id.toString() === eventId)
      if (index === undefined) throw new NotFoundError(`event with id ${eventId} does not exist`)

      user.events.splice(index, 1)

      return user.save()

    })
    .then(() => { })

}

module.exports = deleteTargetedEvent