const { Schema, Types: { ObjectId } } = require('mongoose')
const event = require('./event')

const user = new Schema({
    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String
    },

    events: [event]


})

module.exports = user