const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema
const comment = require('./comment')
const reaction = require('./reaction')


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
        default:'null'
        
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    },

    audience: {
        type: Number,
        enum: [0 /*'private'*/, 1 /*'public'*/, 2 /* friends */], // las opciones que tiene esta propiedad
        default: 0
    },

    comments: [comment],

    reactions: [reaction]
    // notes tiene un propiedad secretos donde se añadiran varios secretos, sin limite, haciendo uso de la funcion push

})

module.exports = note