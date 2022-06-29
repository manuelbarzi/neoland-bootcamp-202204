require('dotenv').config()

const { connect, disconnect } = require('mongoose')
const clockUserOut = require('./clockUserOut')
const { User, Clock } = require('../models')

const { env: { MONGO_URL_TEST } } = process



connect(MONGO_URL_TEST)
    .then(() => Promise.all([User.deleteMany(), Clock.deleteMany()]))
    .then(() => {
        const user = new User({ name: 'Pepito Grillo', username: 'pepigri', email: 'pepigri@gmail.com', password: '123123123' })

        const clock = new Clock({ user: user.id })

        return Promise.all([user.save(), clock.save()])
    })
    .then(([user, clock]) =>
        clockUserOut(user.id, clock.id)
          // .then(() => clockUserOut(user.id, clock.id))
    )
    //.then(console.log)
    //.catch(console.error) 
    .then(disconnect)