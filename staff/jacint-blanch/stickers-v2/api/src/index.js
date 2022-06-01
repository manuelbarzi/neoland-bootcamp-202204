require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
// const {registerUser} = require('./logic')
// const {authenticateUser} = require('./logic')
// const {retrieveUser} = require('./logic')
// const {updateUser} = require('./logic')
// const { ConflictError, FormatError, AuthError, NotFoundError } = require('./errors')


const {
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleUpdateUser,

    handleCreateNote,
    handleRetrieveNotes,
    handleUpdateNote,
    handleDeleteNote


} = require('./handlers')

const { connect, disconnect } = require('mongoose')

; (async() => {
    await connect('mongodb://localhost:27017/notes-db')

        console.log('db connected')

        const api = express()

        const jsonBodyParser = bodyParser.json()

        const routes = express.Router()

        routes.post('/users', jsonBodyParser, handleRegisterUser)
        routes.post('/auth', jsonBodyParser, handleAuthenticateUser)
        routes.get('/users', jsonBodyParser, handleRetrieveUser)
        routes.patch('/users', jsonBodyParser, handleUpdateUser)
        
        routes.post('/notes', jsonBodyParser, handleCreateNote)
        routes.get('/notes', jsonBodyParser, handleRetrieveNotes)
        routes.patch('/notes/:noteId', jsonBodyParser, handleUpdateNote)
        routes.delete('/notes/:noteId', jsonBodyParser, handleDeleteNote)

        api.use('/api', routes)

        api.listen(8080, () => console.log('API running'))

        process.on('SIGINT', async () => {
            await disconnect()

            console.log('\nDB disconnected')

            process.exit(0)
        })
    })()