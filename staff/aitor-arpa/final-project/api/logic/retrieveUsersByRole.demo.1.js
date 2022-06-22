require('dotenv').config()

const { connect, disconnect } = require('mongoose')
const retrieveUserRol = require('./retrieveUserRol')
const { User, Clock, Job } = require('../models')

const { env: { MONGO_URL_TEST } } = process

let rol

connect(MONGO_URL_TEST)
    .then(() => Promise.all([User.deleteMany(), Clock.deleteMany(), Job.deleteMany()]))
    .then(() => {

        const user = new User({ name: 'Pepito Grillo', username: 'pepigri', email: 'pepigri@gmail.com', password: '123123123', role: 'worker' })
        const user3 = new User({ name: 'Pepito Grillo', username: 'pepigril', email: 'pepgigri@gmail.com', password: '123123123', role: 'admin' })
        rol = 'worker'

        return Promise.all([user.save(), user3.save()])
    })
    .then(([_user, user4]) => {
        

       return retrieveUserRol(_user.id, rol)
        // .then(() => retrieveUserRol(user.id, clock.id))

    })
    //.then(console.log)
    //.catch(console.error) 
    .then(disconnect)