const { Schema} = require('mongoose')

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