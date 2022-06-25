const { createBooking } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')


module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)
        const { params: {flatId}, body: { name, phone, email, text, from, to } } = req

        createBooking(userId, flatId, name, phone, email, text, from, to )
            .then(bookingId => res.status(201).json({ bookingId }))
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}