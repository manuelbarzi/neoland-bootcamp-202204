const { addPointToActivity } = require('../logic')
const { handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {

        const { params: {activityId}, body: { lat, lng, alt } } = req
    
        addPointToActivity(activityId, lat, lng, alt)
            .then(() => res.status(204).send())
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}