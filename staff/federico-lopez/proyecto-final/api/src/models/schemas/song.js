const { Schema, Types: { ObjectId } } = require('mongoose')
const interpretation = require('./interpretation')

const song = new Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: ObjectId,
        required: true,
        ref: 'Artist'
    },
    genre: {
        type: Number
    },
    album: {
        type: String
    },
    date: {
        type: Date
    },
    interpretations: [interpretation]
})

module.exports = song