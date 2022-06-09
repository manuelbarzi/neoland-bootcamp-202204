const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema
const comment = require('./comment')
const point = require('./point')


const activity = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },

    checkpoints: [point],
    
    comments: [comment],
    
    likes: [{
        type: ObjectId,
        ref: 'User'
    }]

})

module.exports = activity