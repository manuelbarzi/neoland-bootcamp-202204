const { createActivity } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)

        const { body: { title } } = req

        createActivity(userId, title)
            .then(activityId => res.status(201).json({ activityId }))
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}