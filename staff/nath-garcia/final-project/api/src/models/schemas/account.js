const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const account = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    type: {
        type: Number,
        enum: [0, 1, 2, 3, 4, 5],
        require: false
    }, 

    text: {
        type: String,
        require: false
    }

})
module.exports = account