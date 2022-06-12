const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const booking = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    apartment: {
        type: ObjectId,
        required: true,
        ref: 'Apartment'
    },

    name: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    notes: {
        type: String,
        required: true,
        default: ''
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = booking