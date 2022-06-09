const { User, Event } = require('../models')
const { NotFoundError } = require('../errors')
const {  validateObjectId, validateString } = require('../validators')
debugger
function createEvent(userId, title, description) {
    validateObjectId(userId)
    if (title != null) validateString(title, 'title')
    if (description != null) validateString(description, 'description')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Event.create({ user: userId, title, description })
        })
        .then(event => event.id)
}

module.exports = createEvent