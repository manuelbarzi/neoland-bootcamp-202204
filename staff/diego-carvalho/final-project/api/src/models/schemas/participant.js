const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const participant = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

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
        type: String
    },

})

module.exports = participant