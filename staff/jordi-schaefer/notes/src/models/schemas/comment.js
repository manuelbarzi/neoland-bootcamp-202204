const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema
const reaction = require('./reaction')


const comment = new Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    text: {
        type: String,
        required: true,
        default: ''
    },
    date: {
        type: Date,
        default: Date.now
    },
    reactions: [reaction]
})

module.exports = comment