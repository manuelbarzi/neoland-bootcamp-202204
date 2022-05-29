const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema
const secret = require('./secret')


const note = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    text: {
        type: String,
        required: true,
        default: ''
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    },

    secret: [secret]
    // notes tiene un propiedad secretos donde se añadiran varios secretos, sin limite, haciendo uso de la funcion push

})

module.exports = note