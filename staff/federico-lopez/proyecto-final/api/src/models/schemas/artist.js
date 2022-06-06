const { Schema } = require('mongoose')

const artist = new Schema({
    name: {
        type: String,
        required: true
    },
    genres: {
        type: [Number]
    },
    country: {
        type: [Number]
    }
})

module.exports = artist