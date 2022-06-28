const { model } = require('mongoose')
const { user, schedule, product, item } = require('../models/schemas') 

const User = model('User', user)
const Schedule = model('Schedule', schedule)
const Product = model('Product', product)

Product.BLANCO = 0
Product.INTEGRAL = 1
Product.VARIADADES = 2
Product.BOLLERIA = 3
Product.SIN_GLUTEN = 4


const Item = model('Item', item)

module.exports = {
    User,
    Schedule,
    Product,
    Item
}