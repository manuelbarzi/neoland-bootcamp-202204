const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const apartment = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    address: {
        type: String,
        default: null
    },

    images: {
        type: [String],
        default: null
    },

    title: {
        type: String,
        default: null
    },

    description: {
        type: String,
        default: null
    }
})

module.exports = apartment