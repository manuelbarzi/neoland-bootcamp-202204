const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const booking = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    flat: {
        type: ObjectId,
        required: true,
        ref: 'Flat'
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

    text: {
        type: String,
        required: true,
        default: ''
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    },

    from: {
        type: String,
        required: true
    },

    to: {
        type: String,
        required: true
    }
})

module.exports = booking