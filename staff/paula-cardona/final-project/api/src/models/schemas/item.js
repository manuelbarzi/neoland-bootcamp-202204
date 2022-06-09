const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema


const item = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    product: {
        type: ObjectId,
        required: true,
        ref: 'Product'
    },
    quantity: {
        type: Number
    }
}) 
module.exports = item
