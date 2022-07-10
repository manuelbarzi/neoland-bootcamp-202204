require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const {
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleUpdateUser,
    handleUnregisterUser,
    handleCreateNote,
    handleRetrieveNotes,
    handleUpdateNote,
    handleDeleteNote,
    handleAddCommentToNote } = require('./handlers')
const { connect, disconnect } = require('mongoose')
const { cors } = require('./helpers.js')

    ; (async () => {
        await connect('mongodb://localhost:27017/notes-db')

        console.log('DB connected')

        const api = express()

        api.use(cors)

        const jsonBodyParser = bodyParser.json()

        const routes = express.Router()

        routes.post('/users', jsonBodyParser, handleRegisterUser)
        routes.post('/users/auth', jsonBodyParser, handleAuthenticateUser)
        routes.get('/users', handleRetrieveUser)
        routes.patch('/users', jsonBodyParser, handleUpdateUser)
        routes.delete('/users', jsonBodyParser, handleUnregisterUser)

        routes.post('/notes', jsonBodyParser, handleCreateNote)
        routes.get('/api/notes', handleRetrieveNotes)
        routes.patch('/notes/:noteId', jsonBodyParser, handleUpdateNote)
        routes.delete('/users', jsonBodyParser, handleDeleteNote)

        routes.post('/notes/:noteId', jsonBodyParser, handleAddCommentToNote)

        api.use('/api', routes)

        api.listen(8080, () => console.log('API running'))

        process.on('SIGNIT', async () => {
            await disconnect()

            console.log('\nDB disconnected')

            process.exit(0)
        })
    })()