const { Schema } = require('mongoose')

const product = new Schema({
    
    title: {
        type: String,
        required: true,
    },
    type: {
        type: Number,
        enum: [0 /* pan blanco */, 1 /* pan integral */, 2 /* pan de variedades */, 3 /* bolleria */, 4 /* sin gluten */, ],
        default: null,
        required: true
    }
    

})

module.exports = product

