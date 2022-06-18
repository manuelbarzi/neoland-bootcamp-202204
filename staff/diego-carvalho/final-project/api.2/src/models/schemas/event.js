const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const event = new Schema({
    ownerEvent: {
        type: ObjectId,
        ref: 'User'
    },

    // photo:{
    //     type: String,
    //     default: 'https://metaverso247.com/wp-content/uploads/2022/05/Metaverso-ETF.jpg'
    // },

    title: {
        type: String,
        default: null,
    },

    description: {
        type: String,
        default: null,

    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    },

    direction: {
        type: String,
    },

    category: {
        type: String,
        enum: ['sport-activities', 'social-activities', 'environment'],
        default: 'sport-activities'

    },

    participants: [{
        type: ObjectId,
        ref: 'User'
    }]

})

module.exports = event