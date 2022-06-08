require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const { connect, disconnect } = require('mongoose')
const { cors } = require('./helpers')
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
    handleCommentToNote,
    handleDeleteCommentFromNote,
    handleRetrievePublicNotes } = require('./handlers')


const { env: { MONGODB_URL, PORT = 8080 }, argv: [, , port = PORT] } = process

    ; (async () => {
        await connect(MONGODB_URL)

        console.log('DB connected')

        const api = express()

        api.use(cors)

        const jsonBodyParser = bodyParser.json()

        const routes = express.Router()

        //USERS
        routes.post('/users', jsonBodyParser, handleRegisterUser)
        routes.post('/users/auth', jsonBodyParser, handleAuthenticateUser)
        routes.get('/users', handleRetrieveUser)
        routes.patch('/users', jsonBodyParser, handleUpdateUser)
        routes.delete('/users', jsonBodyParser, handleDeleteUser)

        //NOTES
        routes.post('/notes', jsonBodyParser, handleCreateNote)
        routes.get('/notes', jsonBodyParser, handleRetrieveNotes)
        routes.patch('/notes/:noteId', jsonBodyParser, handleUpdateNote)
        routes.delete('/notes/:noteId', jsonBodyParser, handleDeleteNote) 
        routes.get('/notes/public', jsonBodyParser, handleRetrievePublicNotes)

        //COMMENTS
        routes.post('/notes/:noteId', jsonBodyParser, handleCommentToNote)
        routes.delete('/notes/:noteId/:commentId', jsonBodyParser, handleDeleteCommentFromNote)
        
    

        api.use('/api', routes)

        api.listen(port, () => console.log('API running'))

        process.on('SIGINT', async () => {
            await disconnect()

            console.log('\nDB disconnected')

            process.exit(0)
        })
    })()