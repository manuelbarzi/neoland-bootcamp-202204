const { Activity, Point } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces, validateNumber } = require('../validators')

function addPointToActivity(activityId, lat, lng, alt) {
    validateStringNotEmptyNoSpaces(activityId, 'activity Id')
    validateNumber(lat, 'latitude')
    validateNumber(lng, 'longitude')
    if(alt != null) validateNumber(alt, 'altitude')
    

    if(alt === null) {
        // find altitude somewhere
    }

    return Activity.findById(activityId)
        .then(activity => {
            if (!activity) throw new NotFoundError(`activity with id ${activityId} does not exist`)

            const point = new Point({altitude: alt, latitude: lat, longitude: lng})
            activity.points.push(point)

            return activity.save()
                .then(() => {
                    return point.id
                })
        })
}

module.exports = addPointToActivity