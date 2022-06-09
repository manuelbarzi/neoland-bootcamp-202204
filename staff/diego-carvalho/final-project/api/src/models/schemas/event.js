const { Schema } = require('mongoose')
const category = require('./category')
const participant = require('./participant')
const { Types: { ObjectId } } = Schema

const event = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
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
        required: true,
        default: Date.now
    },
    photo:{
        type: String,
        default: null
    },

    direction:{
        type: String,
        //required: true
    },
    
    categories:[category],

    participants: [participant]

})

module.exports = event