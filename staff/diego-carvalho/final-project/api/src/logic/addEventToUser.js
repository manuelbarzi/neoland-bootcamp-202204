const { User, Event } = require('../models')
const { NotFoundError, ConflictError } = require('../errors')
const { validateObjectId } = require('../validators')

function addEventToUser(eventId, userId) {
  validateObjectId(eventId)
  validateObjectId(userId)

  return Event.findById(eventId)
    .then(event => {
      if (!event) throw new NotFoundError(`event with id ${eventId} not found`)

      return User.findById(userId)
        .then(user => {
          if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

          const eventIdAlreadyExists = user.events.some(_eventId => _eventId.toString() === eventId)

          if (eventIdAlreadyExists) throw new ConflictError(`event with id ${eventId} already signed up.`)

          user.events.push(eventId)

          return user.save()
        })
        .then(() => {
          const participantIdAlreadyExists = event.participants.some(_userId => _userId.toString() === userId)
          // si ese evento ya tiene ese usuario, si lo tiene lo quita y si no lo pone(push)
          if (participantIdAlreadyExists) throw new ConflictError(`user with id ${userId} already signed up.`)

          event.participants.push(userId)

          return event.save()
        })
    })
    .then(() => { })
}

module.exports = addEventToUser