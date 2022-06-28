const { NotFoundError } = require('errors')
const { Flat, User, Booking } = require("../models")
const { validateStringNotEmptyNoSpaces } = require('validators')

function retrieveBookings(userId, flatId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(flatId, 'flat id')

    return User.findById({ _id: userId })
        .then((user) => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Flat.findById(flatId)
        })
        .then((flat) => {
            if (!flat) throw new NotFoundError(`flat with id ${flatId} does not exist`)

            return Flat.findById(flatId)
        })
        .then(() => {
            return Booking.find({ flat: flatId }).lean()
        })
        .then(bookings => {
            bookings.forEach(booking => {
                booking.id = booking._id.toString()

                delete booking._id
                delete booking.user
                delete booking.__v
                return booking
            })

            return bookings
        })
}

module.exports = retrieveBookings