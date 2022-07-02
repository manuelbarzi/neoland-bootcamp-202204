require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const { handleRegisterUser, handleAuthenticateUser, handleRetrieveUser, handleUpdateUser, handleIncidence, handleIncidenceNearMe, handleComment } = require('./handlers')
const { connect, disconnect } = require('mongoose')
const { cors } = require('./helpers.js')

    ; ( async () => {
        await connect('mongodb://localhost:27017/notes-db')
        console.log('DB connected')

        const api = express()
        api.use(cors)
        const jsonBodyParser = bodyParser.json()
        const routes = express.Router()

        routes.post('/users', jsonBodyParser, handleRegisterUser)
        routes.post('/users/auth', jsonBodyParser, handleAuthenticateUser)
        routes.get('/users', jsonBodyParser, handleRetrieveUser)
        routes.patch('/users', jsonBodyParser, handleUpdateUser)
        
        routes.post('/incidence', jsonBodyParser, handleIncidence)
        routes.post('/comment', jsonBodyParser, handleComment)

        routes.get('/incidents-near-me/:lat/:long', jsonBodyParser, handleIncidenceNearMe)

        


        api.use('/api', routes)
        api.listen(8080, () => console.log('API running'))
        process.on('SIGINT', async () => {
            await disconnect()
            console.log('\nDB disconnected')
            process.exit(0)
        })

    })()