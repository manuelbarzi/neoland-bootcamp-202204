const { Schema } = require('mongoose')
const comment = require('./comment')
const { Types: { ObjectId }} = Schema

const note = new Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    text: String,
    date: {
        type: Date,
        default: Date.now
    },
    audience: {
        type: String,
        enum: ['private', 'public', 'friends'],
        default: 'private'
    },
    comments: [comment]
})

module.exports = note