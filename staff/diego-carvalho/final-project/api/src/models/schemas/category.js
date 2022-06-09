const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const category = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    type: {
        type: Number,
        enum: [0 /*Actividades deportivas*/, 1/*Actividades sociales*/, 2/*Medio ambiente*/],
        default: 0
    }

})

module.exports = category