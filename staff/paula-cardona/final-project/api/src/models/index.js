const { model } = require('mongoose')
const { user, schedule, product, item } = require('../models/schemas') 

const User = model('User', user)
const Schedule = model('Schedule', schedule)
const Product = model('Product', product)
const Item = model('Item', item)

module.exports = {
    User,
    Schedule,
    Product,
    Item
}