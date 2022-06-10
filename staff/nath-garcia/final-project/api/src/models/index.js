const { model } = require('mongoose')
const { user, account, movement } = require('./schemas')

const User = model('User', user)
const Account = model('Account', account)
const Movement = model('Movement', movement)

module.exports = {
    User,
    Account,
    Movement
}