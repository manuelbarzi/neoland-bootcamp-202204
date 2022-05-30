const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema

const comment = new Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    text: String,
    date: {
        type: Date,
        default: Date.now
    },
    likes: [{
        type: ObjectId,
        ref: 'User'
    }]
})

module.exports = comment