const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema
const comment = require('./comment')

const reaction = new Schema({
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

    audience: {
        type: String,
        enum: ['private', 'public', 'friends'],
        default: 'private'
    },
    comments: [comment]
})

module.exports = reaction