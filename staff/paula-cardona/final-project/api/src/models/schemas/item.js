const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema

const item = new Schema({
    
    product: {
        type: ObjectId,
        required: true,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        required: true
    }
}) 
module.exports = item
