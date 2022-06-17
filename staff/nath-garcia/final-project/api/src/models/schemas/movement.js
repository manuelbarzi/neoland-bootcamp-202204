const { Schema, Types: { ObjectId } } = require('mongoose')
const account = require('./account')

const movement = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    type: {
        type: String,
        enum: ['income', 'outcome'],
        default: 'outcome'
    },

    category: {
        type: Number,
        enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        default: 0,
        required: true
    },

    concept: {
        type: String,
        require: false
    },

    amount: {
        type: Number,
        required: true
    },

    account: {
        type: ObjectId,
        require: false
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    }, 

    account: [account]
})

module.exports = movement