const { Schema } = require('mongoose')

const point = new Schema({
    
    altitude: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    text: {
        type: String,
        required: true
    }

})

module.exports = point