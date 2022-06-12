const { User, Event } = require('../models')
const { NotFoundError } = require('../errors')
const { validateObjectId, validateString } = require('../validators')

function createEvent(userId, title, description) {
    validateObjectId(userId, 'userId')
    validateString(title, 'title')
    validateString(description, 'description')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`owner with id ${userId} does not exist`)

            return Event.create({ owner: userId, title, description })
        })
        .then(event => event.id)
}

module.exports = createEvent