const { User, Event } = require('../models')
const { NotFoundError, ConflictError } = require('../errors')
const { validateObjectId } = require('../validators')

function addEventToUser(eventId, userId) {
  validateObjectId(eventId)
  validateObjectId(userId)
  debugger
  let event
  return Event.findById(eventId)
    .then(_event => {
      if (!_event) throw new NotFoundError(`event with id ${eventId} not found`)
      event = _event
      return User.findById(userId)
    })
    .then(user => {
      if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

      const eventIdAlreadyExists = user.events.some(_eventId => {

        return _eventId.toString() === eventId
      })

      if (eventIdAlreadyExists) throw new ConflictError(`event with id ${eventId} already signed up.`)

      user.events.push(eventId)

      return user.save()
    })
    .then(() => {

      const participantIdAlreadyExists = event.participants.some(_userId => _userId.toString() === userId)


      if (participantIdAlreadyExists) throw new ConflictError(`user with id ${userId} already signed up.`)

      event.participants.push(userId)

      return event.save()
    })
    .then(() => { })
}

module.exports = addEventToUser