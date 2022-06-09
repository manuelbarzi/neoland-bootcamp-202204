const { Schema} = require('mongoose')

const user = new Schema({
    name: {
        type: String,
        required: true
    },

    surnames: {
        type: String,
        required: true,
        unique: true
    },

    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    address: [{
        type: String,
        required: true
    }]
})

module.exports = user