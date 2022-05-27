const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema
const comment = require('./comment')

const note = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
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

    role: {
        type: String,
        require: true,
        enum: ['public', 'private'],
        default: 'private'
    },

    comments: [comment]
})

module.exports = note