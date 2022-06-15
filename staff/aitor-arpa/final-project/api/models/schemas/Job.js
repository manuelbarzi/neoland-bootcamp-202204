
const { Schema } = require('mongoose')
const user = require('./User')

const Job = new Schema({
  

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