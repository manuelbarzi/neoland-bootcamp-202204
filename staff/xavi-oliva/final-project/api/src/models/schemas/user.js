const { Schema } = require('mongoose')

const user = new Schema({
    name: {
        type: String,
        required: true
    },

    surname: {
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

    phone: {
        type: String
    }
})

module.exports = user