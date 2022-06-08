const { ObjectId } = require('bson')
const { Schema } = require('mongoose')
const{ job } =require('./Job')

const clock = new Schema({
    id:{
        type: ObjectId,
        default: new ObjectId
    },
    user:{
        type:ObjectId,
        ref: 'user'
    },
    job:{
        type: ObjectId,
        ref: 'job'
    },
    timein:{
        type: Date
        
    },
    timeout:{
        type: Date
        
    }
})
module.exports = clock