const { Schema, Types: { ObjectId } } = require('mongoose')

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

    events: [{
        type: ObjectId,
        ref: 'Event'
    }],

    favorites: [{
        type: ObjectId,
        ref: 'Event'
    }]
})

module.exports = user