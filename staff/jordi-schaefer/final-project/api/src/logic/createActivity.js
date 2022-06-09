const { User, Activity } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces, validateString } = require('../validators')

function createActivity(userId, title='Mountain hike') {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateString(title, 'title')

    return User.findById(userId)
        .then(user => {
            debugger
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Activity.create({ user: userId, title })
        })
        .then(activity => activity.id)
}

module.exports = createActivity