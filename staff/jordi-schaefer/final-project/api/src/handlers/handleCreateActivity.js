const { createActivity } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)

        const { body: { sport, lat, lng, alt } } = req
        
        createActivity(userId, sport, lat, lng, alt)
            .then(activityId => res.status(201).json({ activityId }))
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}