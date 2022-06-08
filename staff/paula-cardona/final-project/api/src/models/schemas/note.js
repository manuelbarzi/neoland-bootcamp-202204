const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema
const reaction = require('./reaction')
const comment = require('./comment')

const note = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    text: {
        type: String,
        default: null
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    audience: {
        type: Number,
        enum: [0 /* private */, 1 /* public */, 2 /* friends */],
        default: 1
    },
    
    reactions: [reaction], //las notas tambien tienen reaccion

    comments: [comment] //el constructor comment vendrá dentro de notes
})

module.exports = note