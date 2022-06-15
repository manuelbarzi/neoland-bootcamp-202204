const { User, Activity, Point } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces, validateString, validateNumber } = require('../validators')

function createActivity(userId, sport, lat, lng, alt) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateString(sport, 'sport')
    validateNumber(lat, 'latitude')
    validateNumber(lng, 'longitude')
    if(alt != null) validateNumber(alt, 'altitude')
    
    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)


            if(alt === null) {
                // find altitude somewhere
            }

            const point = new Point({altitude: alt, latitude: lat, longitude: lng})
            return Activity.create({ user: userId, sport, points: [point] })
        })
        .then(activity => activity.id)
}

module.exports = createActivity