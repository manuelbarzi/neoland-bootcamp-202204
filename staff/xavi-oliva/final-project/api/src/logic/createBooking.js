const { User, Flat, Booking } = require('../models')
const { NotFoundError } = require('errors')
const { 
    validateStringNotEmptyNoSpaces, 
    validateString, 
    validateStringNotEmptyOrBlank,
    validateEmail} = require('validators')

function createBooking(userId, flatId, name, phone, email, text, from, to) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(flatId, 'flat id')
    validateStringNotEmptyOrBlank(name, 'name')
    if (phone != null)  validateString(phone, 'phone')
    if (email != null)  validateEmail(email, 'email')
    if (text != null)  validateString(text, 'text')
    validateString(from, 'from')
    validateString(to, 'to')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Flat.findById(flatId)
        })
        .then(flat => {
            if (!flat) throw new NotFoundError(`flat with id ${flatId} does not exist`)

            return Booking.create({ user: userId, flat: flatId, name, phone, email, text, from, to })
        })
        .then(booking => booking.id)
}
module.exports = createBooking
