const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const account = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    type: {
        type: String,
        enum: ['bank account', 'credit card', 'paypal', 'debit card', 'cash'],
        require: false
    }, 
    text: {
        type: String,
        require: false
    }

})
module.exports = account