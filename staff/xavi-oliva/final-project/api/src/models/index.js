const { model } = require('mongoose')
const { user, flat, booking } = require('./schemas') 

const User = model('User', user)
const Flat = model('Flat', flat)
const Booking = model('Booking', booking)

module.exports = {
    User,
    Flat,
    Booking
}