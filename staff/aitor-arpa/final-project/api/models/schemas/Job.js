const { ObjectId } = require('bson')
const { Schema } = require('mongoose')
const user = require('./User')

const Job = new Schema({
id:{
    type: ObjectId,
    default: new ObjectId
},   

title: {
    type: String,
    
},
description: {
    type: String
},
address: {
    type: String
},
duration: {
    type: Number,
    
},
    
workers: ([user])

})

module.exports = Job