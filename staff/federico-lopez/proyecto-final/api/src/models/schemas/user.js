const { Schema } = require('mongoose')

const user = new Schema({
    username: {
        type: String,
        minLength: 4,
        required: true,
        unique: true,
        inmutable: true
    },
    password: {
        type: String,
        minLength: 8,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    dateOfBirth: {
        type: Date
    }
})

module.exports = user