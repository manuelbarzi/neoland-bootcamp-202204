const { Activity } = require('../models')
const { NotFoundError } = require('errors')
const { validateStringNotEmptyNoSpaces, validateStringNotEmptyOrBlank, validateString } = require('validators')

function saveActivity(activityId, title, text='', audience, sport, dificult, images) {
    validateStringNotEmptyNoSpaces(activityId, 'activity Id')
    validateStringNotEmptyOrBlank(title, 'title')
    validateString(text, 'text')
    if(sport) validateString(sport, 'sport')
    validateString(dificult, 'dificult')
    if(images) {
        images.forEach(image => {
        validateString(image, 'image')
        })
    }

    return Activity.findById(activityId)
        .then(activity => {
            if (!activity) throw new NotFoundError(`activity with id ${activityId} does not exist`)

            activity.title = title
            activity.text = text
            activity.private = audience
            if(sport) activity.sport = sport
            activity.dificult = dificult
            if(images) {
                images.forEach(image => {
                activity.images.push(image)
                })
            }

            return activity.save()
        })
        .then(() => { })
}

module.exports = saveActivity