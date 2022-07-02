const { Schema, Types: { ObjectId } } = require('mongoose')

const incidence = new Schema({

    description: {
        type: String,
    },

    date: {
        type: Date
    },
    
    user: [{
        type: ObjectId,
        ref: 'User'
    }],

    latitude: {
        type: String,
        required: true
    },

    longitude: {
        type: String,
        required: true
    },

})

module.exports = incidence

