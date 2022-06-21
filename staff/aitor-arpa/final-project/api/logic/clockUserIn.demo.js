require('dotenv').config()

const { connect, disconnect } = require('mongoose')
const clockUserIn = require('./clockUserIn')
const { User, Clock } = require('../models')

const { env: { MONGO_URL_TEST } } = process

// $ node logic/clockUserIn.demo.js
// $ node --inspect-brk logic/clockUserIn.demo.js

connect(MONGO_URL_TEST)
    .then(() => Promise.all([User.deleteMany(), Clock.deleteMany()]))
    .then(() => User.create({ name: 'Pepito Grillo', username: 'pepigri', email: 'pepigri@gmail.com', password: '123123123' }))
    .then(user =>
        clockUserIn(user.id)
           // .then(() => clockUserIn(user.id))
    )
    .then(console.log)
    .catch(console.error) 
    .then(disconnect)