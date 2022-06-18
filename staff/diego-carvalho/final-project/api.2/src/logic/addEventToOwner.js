const { User, Event } = require('../models')
const { NotFoundError, AuthError } = require('../errors')
const { validateObjectId } = require('../validators')
debugger
function addEventToOwner(eventId, userId) {
  validateObjectId(eventId)
  validateObjectId(userId)

  return Event.findById({ _id: eventId })
    .then(event => {
      if (!event) throw new NotFoundError(`event with id ${eventId} not found`)

      return User.findById({ _id: userId })
    })
    .then(user => {
      if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

      // const userComment = new Comment({ user: userId, text: text})
      user.events.push(eventId)

      return user.save()
        .then(() => eventId)
    })
}

/*
    return note.save()
                .then(() => comment.id)
        })
 */
module.exports = addEventToOwner