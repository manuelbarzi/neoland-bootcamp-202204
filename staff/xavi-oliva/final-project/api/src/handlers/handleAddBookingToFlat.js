const { addBookingToFlat } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = async (req, res) => {
    try {
        const userId = verifyToken(req)

        const { body: { name, phone, email, text, from, to }, params: { flatId } } = req

        const bookingId = await addBookingToFlat(userId, flatId, name, phone, email, text, from, to)

        res.status(201).json({ bookingId })
    } catch (error) {
        handleErrorsAndRespond(error, response)
    }
}