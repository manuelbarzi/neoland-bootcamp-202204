require('dotenv').config()

const { connect, disconnect } = require('mongoose')
const clockUserJobOut = require('./clockUserJobOut')
const { User, Clock, Job } = require('../models')

const { env: { MONGO_URL_TEST } } = process

// $ node logic/clockUserJobOut.demo.js
// $ node --inspect-brk logic/clockUserJobOut.demo.js

connect(MONGO_URL_TEST)
    .then(() => Promise.all([User.deleteMany(), Clock.deleteMany(),Job.deleteMany()]))
    .then(() => {

        const user = new User({ name: 'Pepito Grillo', username: 'pepigri', email: 'pepigri@gmail.com', password: '123123123' })
        const job = new Job ({user:user.is, })

        const clock = new Clock({ user: user.id, job: job.id })

        return Promise.all([user.save(),job.save(), clock.save()])
    })
    .then(([user, job, clock ])=>
        clockUserJobOut(user.id,job.id,clock.id)
         .then(() => clockUserJobOut(user.id,job.id,clock.id))

    )
    
    .then(console.log)
    .catch(console.error) 
    .then(disconnect)