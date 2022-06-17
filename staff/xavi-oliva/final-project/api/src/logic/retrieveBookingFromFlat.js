const { Flat, Booking } = require("../models")
const { NotFoundError } = require('errors')

async function retrieveBookingFromFlat(flatId, bookingId) {
    validateStringNotEmptyNoSpaces(flatId, 'flat id')
    validateStringNotEmptyNoSpaces(bookingId, 'booking id')

    return Flat.findById({ _id: flatId })
        .then(result => {
            if (result === null) throw new NotFoundError(`flat with id ${flatId} does not exist`)
        })
        .then(() => {
            return Booking.find({ flat: flatId }).lean()
        })
        .then(Bookings => {
            bookings.forEach(booking => {
                booking.id = booking._id.toString()

                delete booking._id
                delete booking.flat
                delete booking.__v
                return booking
            })
            return bookings
        })
}

module.exports = retrieveBookingFromFlat