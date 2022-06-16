const { User, Event } = require('../models')
const { NotFoundError } = require('../errors')
const { validateObjectId, validateString } = require('../validators')

function createEvent(userId, title, description, category) {
    validateObjectId(userId, 'userId')
    if(title != null)validateString(title, 'title')
    if (description != null)validateString(description, 'description')
    if (category != null)validateString(category, 'category')
   

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`owner with id ${userId} does not exist`)

            return Event.create({ owner: userId, title, description, category})
        })
        .then(event => event.id)
}

module.exports = createEvent