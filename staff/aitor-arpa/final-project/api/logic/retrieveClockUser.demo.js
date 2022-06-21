require('dotenv').config()

const { connect, disconnect } = require('mongoose')
const retrieveClockUser = require('./retrieveClockUser')
const { User, Clock, Job } = require('../models')

const { env: { MONGO_URL_TEST } } = process



connect(MONGO_URL_TEST)
    .then(() => Promise.all([User.deleteMany(), Clock.deleteMany(), Job.deleteMany()]))
    .then(() => {
        const user = new User({ name: 'Pepito Grillo', username: 'pepigri', email: 'pepigri@gmail.com', password: '123123123' })
        const job = new Job({ user: user.id })
        const clock = new Clock({ user: user.id, job: job.id })
        const clock2 = new Clock({ user: user.id , job: null })
        const clock3 = new Clock({ user: user.id, job: null  })
        const clock4 = new Clock({ user: user.id, job: job.id })

        return Promise.all([user.save(), job.save(), clock.save(),clock2.save(),clock3.save(),clock4.save()])
    })
    .then(([user]) =>
        retrieveClockUser(user.id)
        // .then(() => retrieveClockUser(user.id, clock.id))
    )
    //.then(console.log)
    //.catch(console.error) 
    .then(disconnect)