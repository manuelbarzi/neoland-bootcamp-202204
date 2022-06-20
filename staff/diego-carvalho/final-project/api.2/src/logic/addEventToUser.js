const { User, Event } = require('../models')
const { NotFoundError, AuthError } = require('../errors')
const { validateObjectId } = require('../validators')
debugger
function addEventToUser(eventId, userId) {
  validateObjectId(eventId)
  validateObjectId(userId)

  return Event.findById({ _id: eventId })
    .then(event => {
      if (!event) throw new NotFoundError(`event with id ${eventId} not found`)

      return User.findById({ _id: userId })
        .then(user => {
          if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

          user.events.push(eventId)

          return user.save()
        })
        .then(() => {
          event.participants.push(userId)

          return event.save()
        })

    })
    .then(() => { })
}

module.exports = addEventToUser