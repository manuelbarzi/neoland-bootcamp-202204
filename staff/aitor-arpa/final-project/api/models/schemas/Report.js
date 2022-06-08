const { ObjectId } = require('bson')
const { Schema } = require('mongoose')
const user = require ('./User')
const job = require ('./Job')

const report = new Schema({
    id:{ 
        type: ObjectId
    },
    user: {
        type: ObjectId,
        ref: 'user'
       
    },
    job:{
        type: ObjectId,
        ref: 'job'
        
    },
    title:{
        type: String,
       
    },
 
    cause: {
        type: String
    },

    
    description:{
        type: String
    },
    date:{
        type: Date,
        default: new Date
    }
 
})

module.exports = report