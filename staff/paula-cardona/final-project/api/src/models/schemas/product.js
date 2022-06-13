const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema

const product = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
    

})

module.exports = product

