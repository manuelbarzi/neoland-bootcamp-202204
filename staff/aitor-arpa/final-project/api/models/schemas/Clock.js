const { ObjectId } = require('bson')
const { Schema } = require('mongoose')
const{ job } =require('./Job')

const clock = new Schema({
   
    user:{
        type:ObjectId,
        ref: 'user'
    },
    job:{
        type: ObjectId,
        ref: 'job'
    },
    timein:{
        type: Date,
        default: Date.now
    },
    timeout:{
        type: Date
    }
})
module.exports = clock