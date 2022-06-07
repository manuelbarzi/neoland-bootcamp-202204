const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema
const reaction = require('./reaction')
const comment = require('./comment')

const apartment = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    title: {
        type: String,
        default: null
    },
    
    description: {
        type: String,
        default: null
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    },

    email: {
        type: String
    },

    phone: {
        type: String
    },

    // audience: {
    //     type: Number,
    //     enum: [0 /* private */, 1 /* public */, 2 /* friends */],
    //     default: 0
    // },

    available: {
        type: Number,
        enum: [0 /* available */, 1 /* taken */],
        default: 0
    },

    reactions: [reaction],

    comments: [comment]
})

module.exports = apartment