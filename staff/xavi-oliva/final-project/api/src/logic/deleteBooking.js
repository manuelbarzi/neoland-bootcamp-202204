const { NotFoundError, ConflictError } = require('errors')
const { validateStringNotEmptyNoSpaces } = require('validators')
const { Booking } = require("../models")

function deleteBooking(userId, flatId, bookingId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(flatId, 'flat id')
    validateStringNotEmptyNoSpaces(bookingId, 'booking id')
    
    return Booking.findById(bookingId)
        .then((booking) => {
            if (!booking) throw new NotFoundError(`booking with id ${bookingId} does not exist`)
            if (booking.user.toString() !== userId) throw new ConflictError(`booking with id ${bookingId} does not belong to flat with id ${flatId}`)

            return Booking.deleteOne({ id: bookingId, user: userId, flat: flatId })
        })
        .then(() => {})
}

module.exports = deleteBooking