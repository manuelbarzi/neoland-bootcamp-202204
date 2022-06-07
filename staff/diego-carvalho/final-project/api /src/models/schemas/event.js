const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const event = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    creatorId: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    photo:{
        type: String,
        default: null
    },
    
    title: {
        type: String,
        required: true
       
    },

    description: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    direction:{
        type: String,
        required: true
    },
    
    category:{
        type: String,
        default: 'Actividades deportivas'
    },

    participants: [{
        type: ObjectId,
        ref: 'User'
    }]
})

module.exports = event