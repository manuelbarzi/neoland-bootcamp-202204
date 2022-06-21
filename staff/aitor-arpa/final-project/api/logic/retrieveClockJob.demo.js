require('dotenv').config()

const { connect, disconnect } = require('mongoose')
const retrieveClockJob = require('./retrieveClockJob')
const { User, Clock, Job } = require('../models')

const { env: { MONGO_URL_TEST } } = process



connect(MONGO_URL_TEST)
    .then(() => Promise.all([User.deleteMany(), Clock.deleteMany(),Job.deleteMany()]))
    .then(() => {
        const user = new User({ name: 'Pepito Grillo', username: 'pepigri', email: 'pepigri@gmail.com', password: '123123123' })
        const job = new Job({user : user.id})
        const job1 = new Job({user : user.id})
        const job2 = new Job({user : user.id})
        const clock = new Clock({ user: user.id, job: job.id })

        return Promise.all([user.save(), job.save(),job2.save(),job1.save(),clock.save()])
    })
    .then(([user, job]) =>
        retrieveClockJob(user.id, job)
          // .then(() => retrieveClockJob(user.id, clock.id))
    )
    //.then(console.log)
    //.catch(console.error) 
    .then(disconnect)