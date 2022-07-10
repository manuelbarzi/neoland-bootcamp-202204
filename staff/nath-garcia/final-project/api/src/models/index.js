const { model } = require('mongoose')
const { user, account, movement } = require('./schemas')

const User = model('User', user)
const Account = model('Account', account)
const Movement = model('Movement', movement)

Movement.HOME = 0
Movement.FEEDING = 1
Movement.BEAUTY = 2
Movement.EDUCATION = 3
Movement.TRANSPORTATION = 4
Movement.LEISURE = 5
Movement.HEALTH = 6
Movement.ROUTINES = 7
Movement.OTHEREXPENSES = 8
Movement.SALARY = 9
Movement.SAVING = 10
Movement.INTERESTS = 11
Movement.GIFT = 12
Movement.RETURN = 13
Movement.OTHERINCOME = 14

Account.BANKACCOUNT = 0
Account.CREDITCARD = 1
Account.DEBITCARD = 2
Account.PAYPAL = 3
Account.CASH = 4
Account.OTHER = 5

module.exports = {
    User,
    Account,
    Movement
}