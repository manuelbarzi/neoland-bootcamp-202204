const { saveActivity } = require('../logic')
const { handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {

        const { params: {activityId}, body: { title, text, audience } } = req
        debugger
        saveActivity(activityId, title, text, audience)
            .then(() => res.status(204).send())
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}