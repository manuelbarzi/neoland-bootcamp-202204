const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema


const secret = new Schema({
    user: {
        type: ObjectId,
        requiredd: true
    },

    text: {
        type: String,
        required: true
    },

    hate: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = secret

// para trabajar con modelos dentro de otro modelo
