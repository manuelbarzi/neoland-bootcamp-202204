const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema
const comment = require('./comment')


const note = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    // notes.find().populate('user')     -- en la porpiedad user te traera tambien el usuario!!!
    // notes.find().populate('user', 'username')     -- en la porpiedad user te traera tambine solo su username, ademas del id

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

    audience: {
        type: String,
        enum: ['private', 'public'], // las opciones que tiene esta propiedad
        default: 'public'
    },

    comments: [comment]
    // notes tiene un propiedad secretos donde se añadiran varios secretos, sin limite, haciendo uso de la funcion push

})

module.exports = note