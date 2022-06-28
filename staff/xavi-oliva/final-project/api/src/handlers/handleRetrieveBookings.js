const { retrieveBookings } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)
        const { params: {flatId} } = req

        retrieveBookings(userId, flatId)
            .then(bookings => res.status(200).json(bookings))
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}