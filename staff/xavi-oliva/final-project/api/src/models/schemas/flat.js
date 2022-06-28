const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema
const booking = require('./booking')

const flat = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    address: {
        type: String,
        default: null
    },

    images: [{
        type: String,
        default: null,
        ref: 'Image'
    }],

    title: {
        type: String,
        default: null
    },

    description: {
        type: String,
        default: null
    }
})

module.exports = flat