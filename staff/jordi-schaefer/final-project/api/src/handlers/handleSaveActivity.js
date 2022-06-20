const { saveActivity } = require('../logic')
const { handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {
        const { params: {activityId}, body: { title, text, audience, sport, dificult } } = req
        
        saveActivity(activityId, title, text, audience, sport, dificult)
            .then(() => res.status(204).send())
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}