require('dotenv').config()
const { cors } = require('./helpers')
const express = require('express')
const bodyParser = require('body-parser')
const { connect, disconnect } = require('mongoose')
const { handleRegisterUser, handleAuthenticateUser,
    handleDeleteUser, handleRetrieveUser,
    handleAddJob, handleClockUserIn,
    handleClockUserOut, handleretrieveClockUser,
    handleClockUserJobIn, handleClockUserJobOut,
    handleretrieveClockJob, handleDeleteJob,
    handleretrieveJobsUser, handleRetrieveJobs,
    handleRetrieveUserRol,handleUpdateUser } = require('./handlers')


    ;
(async () => {
    await connect('mongodb://localhost:27017/controlz')
    console.log('DB connected')
    const api = express()

    api.use(cors)
    const jsonBodyParser = bodyParser.json()
    const routes = express.Router()

    /* USER */
    routes.post('/users', jsonBodyParser, handleRegisterUser)
    routes.post('/users/auth', jsonBodyParser, handleAuthenticateUser)
    routes.delete('/users', jsonBodyParser, handleDeleteUser)
    routes.get('/users', handleRetrieveUser)
    routes.get('/users/role', jsonBodyParser, handleRetrieveUserRol)
    routes.post('/users/:id', jsonBodyParser, handleUpdateUser)
    /* JOB */

    routes.post('/job', jsonBodyParser, handleAddJob)
    routes.delete('/job', jsonBodyParser, handleDeleteJob)
    routes.get('/jobs', handleRetrieveJobs)
    routes.get('/job_user', handleretrieveJobsUser)


    /* CLOCK */
    routes.post('/clock', handleClockUserIn)
    routes.post('/clock/job', jsonBodyParser, handleClockUserJobIn)
    routes.post('/clock/job/:id', jsonBodyParser, handleClockUserJobOut)
    routes.post('/clock/:id', jsonBodyParser, handleClockUserOut)
    routes.get('/clock/job', jsonBodyParser, handleretrieveClockJob)
    routes.get('/clock', jsonBodyParser, handleretrieveClockUser)


    api.use('/api', routes)

    api.listen(8080, () => console.log('API running'))

    process.on('SIGINT', async () => {
        await disconnect()

        console.log('\nDB disconnected')

        process.exit(0)
    })
})()
