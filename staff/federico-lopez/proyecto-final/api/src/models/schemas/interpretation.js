const { Schema, Types: { ObjectId } } = require('mongoose')
const comment = require('./comment')

const interpretation = new Schema({
    user: {
        type: ObjectId,
        require: true,
        ref: 'User'
    },
    text: {
        type: String
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    likes: {
        type: [ObjectId]
    },
    comments: [comment],
    chords: {
        type: [ObjectId],
        ref: 'Chords'
    }
})

module.exports = interpretation