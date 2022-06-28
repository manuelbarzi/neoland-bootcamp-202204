const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const comment = new Schema({
    user: {
        type: ObjectId,
        // required: true,
        ref: 'User'
    },
    incidence: {
        type: ObjectId,
        required: true,
        ref: 'Incidence'
    },
    message: {
        type: String,
        required: true,
        default: ''
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = comment