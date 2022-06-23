const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema
const reaction = require('./reaction')
const comment = require('./comment')

const project = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    title: {
        type: String,
        required: true,
        default: ''
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    },

    code: {
        type: String,
        required: true,
    },

    likes: [{
        type: ObjectId,
        ref: 'User'
    }],


    // audience: {
    //     type: Number,
    //     enum: [0 /* private */, 1 /* public */, 2 /* friends */],
    //     default: 0
    // },

    reactions: [reaction],

    comments: [comment]
})

module.exports = project