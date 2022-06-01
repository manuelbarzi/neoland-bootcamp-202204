const { Schema, Types: { ObjectId } } = require('mongoose')


const comment = new Schema({
    user: {
        type: ObjectId, 
        ref: 'User'
    }, 
    text: String,
    date: {
        type: Date,
        ref: Date.now
    },
    likes: [{
        type: ObjectId,
        ref: 'User'
    }]

})  
module.exports = comment