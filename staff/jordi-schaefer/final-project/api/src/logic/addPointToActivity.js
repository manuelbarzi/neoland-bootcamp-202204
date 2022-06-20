const { Activity, Point } = require('../models')
const { NotFoundError } = require('errors')
const { validateStringNotEmptyNoSpaces, validateNumber } = require('validators')
const retrieveAltitude = require('./retrieveAltitude')

function addPointToActivity(activityId, lat, lng, alt) {
    validateStringNotEmptyNoSpaces(activityId, 'activity Id')
    validateNumber(lat, 'latitude')
    validateNumber(lng, 'longitude')
    if(alt != null) validateNumber(alt, 'altitude')

    return Activity.findById(activityId)
        .then(activity => {
            if (!activity) throw new NotFoundError(`activity with id ${activityId} does not exist`)

            if(alt === null) {
                return retrieveAltitude(lat, lng)
                .then(altitude => {
                    alt = altitude
                    const point = new Point({altitude: alt, latitude: lat, longitude: lng})
                    activity.points.push(point)

                    return activity.save()
                        .then(() => {
                            return point.id
                        })
                })
            }

            const point = new Point({altitude: alt, latitude: lat, longitude: lng})
            activity.points.push(point)

            return activity.save()
                .then(() => {
                    return point.id
                })
        })
}

module.exports = addPointToActivity