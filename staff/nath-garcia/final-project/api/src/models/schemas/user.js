const { Schema, Types: { ObjectId } } = require('mongoose')

const user = new Schema({
    name: {
        type: String,
        required: true
    },

    surname: {
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

    phone: {
        type: Number,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    date: {
        type: Date
    }
})

module.exports = user