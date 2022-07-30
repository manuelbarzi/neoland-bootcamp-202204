const { User } = require('../models')
const { NotFoundError } = require('../errors')
const { validateObjectId } = require('../validators')

function retrieveUser(userId) {
    validateObjectId(userId)

    return User.findById(userId).lean()
        .then(user => { // {_id: ObjectId, name: 'Papa Gayo', username: 'papagayo', password: '123123123', __v: 0}
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            delete user._id
            delete user.__v
            delete user.password

            return user
        })
}

module.exports = retrieveUser