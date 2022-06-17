const { createEvent } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {
        const ownerId = verifyToken(req)

        const { body: { title, description, category } } = req

        createEvent(ownerId, title, description, category)
            .then(eventId => res.status(201).json({ eventId }))
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}