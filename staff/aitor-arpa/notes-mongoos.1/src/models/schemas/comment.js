const { ObjectId } = require('bson')
const { Schema } = require('mongoose')


const comment = new Schema({
    user: {
        type: ObjectId,
        ref: 'user'
    },

    text: String,
    date: {
        type: Date,
        default: Date.now
    },
    likes: [{
        type: ObjectId,
        ref: 'user'
    }]
})

module.exports = comment