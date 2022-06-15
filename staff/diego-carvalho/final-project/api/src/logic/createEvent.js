const { User, Event } = require('../models')
const { NotFoundError } = require('../errors')
const { validateObjectId, validateString } = require('../validators')

function createEvent(userId, photo, title, description, direction, category) {
    validateObjectId(userId, 'userId')
    if(photo != null)validateString(photo, 'photo')
    if(title != null)validateString(title, 'title')
    if (description != null)validateString(description, 'description')
    if (direction != null)validateString(direction, 'direction')
    if (category != null)validateString(category, 'category')
   

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`owner with id ${userId} does not exist`)

            return Event.create({ owner: userId, photo, title, description, direction, category})
        })
        .then(event => event.id)
}

module.exports = createEvent