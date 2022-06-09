const { User, Activity } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')

function toggleLikeOnActivity(userId, activityId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(activityId, 'activity id')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Activity.findById(activityId)
        })
        .then(activity => {
            if (!activity) throw new NotFoundError(`Activity with id ${activityId} does not exist`)

            const index = activity.likes.findIndex(like => like === userId)
            if (index < 0) {
                activity.like.push(userId)
            }
            else
                activity.like.splice(index, 1)

            return activity.save()
        })
        .then(() => {  })
}

module.exports = toggleLikeOnActivity