const { ObjectId } = require('bson')
const { Schema } = require('mongoose')



const user = new Schema({
    id:{
        type: ObjectId,
        default: new ObjectId
    },
    
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
        type: String
    },
    Date: {
        type: Date,
        required: true,
        default: Date.now
    },
     
 
})

module.exports = user