const { User, Event } = require('../models')
const { NotFoundError, ConflictError } = require('../errors')
const { validateObjectId } = require('../validators')

function addEventToUser(eventId, userId) {
  validateObjectId(eventId)
  validateObjectId(userId)

  return Event.findById({ _id: eventId })
    .then(event => {
      if (!event) throw new NotFoundError(`event with id ${eventId} not found`)

      return User.findById({ _id: userId })
        .then(user => {
          if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)
          debugger
          const eventsToUserCheck = user.events.some(check => check.event.toString() === eventId)

          if (eventsToUserCheck === eventId) throw new ConflictError(`event with id ${eventId} already exist.`)
          // con some
          user.events.push(eventId)

          return user.save()
        })
        .then(() => {

          const participantsToEventCheck = event.participants.some(participant => participant.user.toString() === userId)

          if (participantsToEventCheck === userId) throw new ConflictError(`user with id ${usertId} already exist.`)
          // si ese evento ya tiene ese usuario, si lo tiene lo quita y si no lo pone(push)
          event.participants.push(userId)

          return event.save()
        })
    })
    .then(() => { })
}

module.exports = addEventToUser