const { ObjectId } = require('bson')
const { Schema } = require('mongoose')



const user = new Schema({
    role: {
        type: String,
        enum: ['admin', 'worker'], 
        default: 'worker'
        
    },
    name:{
        type: String,
        required: true

    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password: { 
        type: String,
        required: true
    },
    nid: {
        type: String
    },

    email: {
        type: String,
        unique: true
    },
    Date: {
        type: Date,
        required: true,
        default: Date.now
    },
     
 
})

module.exports = user