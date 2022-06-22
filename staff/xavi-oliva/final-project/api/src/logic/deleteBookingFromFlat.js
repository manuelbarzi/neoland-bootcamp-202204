const { User, Flat } = require('../models')
const { NotFoundError, AuthError } = require('errors')
const { validateStringNotEmptyNoSpaces } = require('validators')

function deleteBookingFromFlat(userId, flatId, bookingId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(flatId, 'flat id')
    validateStringNotEmptyNoSpaces(bookingId, 'booking id')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Flat.findById(flatId)
        })
        .then(flat => {
            if (!flat) throw new NotFoundError(`flat with id ${flatId} does not exist`)

            const booking = flat.bookings.find(booking => booking._id.toString() === bookingId)

            if (booking == null) throw new NotFoundError(`booking with id ${bookingId} does not exist`)
            else if (!booking.user) throw new NotFoundError(`booking does not have user`)
            else if (booking.user.toString() !== userId) throw new AuthError(`booking does not belong to user with id ${userId}`)

            index = flat.bookings.findIndex(booking => booking._id.toString() === bookingId)
            flat.bookings.splice(index, 1)

            return flat.save()
        })
        .then(() => { })
}

module.exports = deleteBookingFromFlat