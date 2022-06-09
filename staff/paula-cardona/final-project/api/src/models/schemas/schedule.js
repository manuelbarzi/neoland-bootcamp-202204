const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema
const item = require('./item')

const schedule = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    monday: [item],
    tuesday: [item],
    wednesday: [item],
    thursday: [item],
    friday: [item],
    saturday: [item],
    sunday: [item]
})

module.exports = schedule