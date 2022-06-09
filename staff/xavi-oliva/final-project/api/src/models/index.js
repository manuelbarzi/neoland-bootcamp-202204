const { model } = require('mongoose')
const { user, apartment, booking } = require('./schemas') 

const User = model('User', user)
const Apartment = model('Apartment', apartment)
const Booking = model('Booking', booking)

module.exports = {
    User,
    Apartment,
    Booking
}