const { deleteBookingFromFlat } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)

        const { params: {flatId, bookingId} } = req

        deleteBookingFromFlat(userId, flatId, bookingId)
            .then(() => res.status(200).send())
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}