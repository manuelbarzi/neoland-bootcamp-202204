const { createEvent } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {
        const ownerId = verifyToken(req)

        const { body: { photo, title, description, direction, category} } = req

        createEvent(ownerId, photo, title, description, direction, category)
            .then(eventId => res.status(201).json({ eventId }))
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}