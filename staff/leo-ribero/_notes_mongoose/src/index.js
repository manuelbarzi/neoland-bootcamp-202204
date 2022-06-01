require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const {
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleUpdateUser,
    handleDeleteUser,
    handleCreateNote,
    handleRetrieveNotes,
    handleUpdateNote,
    handleDeleteNote,
    handleAddCommentToNote,
    handleDeleteCommentFromNote} = require('./handlers')
const { connect, disconnect } = require('mongoose')

    ; (async () => {
        await connect('mongodb://127.0.0.1:27017/notes-db')//mongodb://127.0.0.1:27017

        console.log('DB connected')

        const api = express()

        const jsonBodyParser = bodyParser.json()

        const routes = express.Router()

        routes.post('/users', jsonBodyParser, handleRegisterUser)
        routes.post('/users/auth', jsonBodyParser, handleAuthenticateUser)
        routes.get('/users', handleRetrieveUser)
        routes.patch('/users', jsonBodyParser, handleUpdateUser)
        routes.delete('/users', jsonBodyParser, handleDeleteUser)

        routes.post('/notes', jsonBodyParser, handleCreateNote)
        routes.get('/notes', handleRetrieveNotes)
        routes.patch('/notes/:noteId', jsonBodyParser, handleUpdateNote)
        routes.delete('/notes/:noteId', jsonBodyParser, handleDeleteNote)
        routes.post('/notes/:noteId/comments', jsonBodyParser, handleAddCommentToNote)
        routes.delete('/notes/:noteId/comments/:commentId', jsonBodyParser, handleDeleteCommentFromNote)

        api.use('/api', routes)

        api.listen(8080, () => console.log('API running'))

        process.on('SIGINT', async () => {
            await disconnect()

            console.log('\nDB disconnected')

            process.exit(0)
        })
    })()
