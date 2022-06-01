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
    handleRetrievePublicNotes,
    handleUpdateNote, 
    handleDeleteNote,
    handleAddCommentToNote,
    handleDeleteCommentFromNote} = require('./handlers')
const { connect, disconnect } = require('mongoose')

    ; (async () => {
        await connect('mongodb://localhost:27017/notes-db')

        console.log('DB connected')

        const api = express()

        const jsonBodyParser = bodyParser.json()

        const routes = express.Router()

        /* REGISTER USER - post */
        routes.post('/users', jsonBodyParser, handleRegisterUser)
        /* AUTHENTICATE USER - post */
        routes.post('/users/auth', jsonBodyParser, handleAuthenticateUser)
        /* RETRIEVE USER - get */
        routes.get('/users', handleRetrieveUser)
        /* UPDATE USER - patch */
        routes.patch('/users', jsonBodyParser, handleUpdateUser)
        /* UNREGISTER USER - delete */
        routes.delete('/users', jsonBodyParser, handleUnregisterUser)

        /* CREATE NOTE - post */
        routes.post('/notes', jsonBodyParser, handleCreateNote)
        /* RETRIEVE NOTES - get */
        routes.get('/notes', handleRetrieveNotes)
        /* RETRIEVE PUBLIC NOTES - get */
        routes.get('/notes/public', handleRetrievePublicNotes)
        /* UPDATE NOTE - patch */
        routes.patch('/notes:noteId', jsonBodyParser, handleUpdateNote)
        /* DELETE NOTE - delete */
        routes.delete('/notes:noteId', jsonBodyParser, handleDeleteNote)

        /* ADD COMMENT TO NOTE - post */
        routes.post('/notes/:noteId', jsonBodyParser, handleAddCommentToNote)
        /* DELETE COMMENT FROM NOTE - delete */
        routes.delete('/notes/:noteId/comments/:commentId', jsonBodyParser, handleDeleteCommentFromNote)

        api.use('/api', routes)

        api.listen(8080, () => console.log('API running'))

        process.on('SIGINT', async () => {
            await disconnect()

            console.log('\nDB disconnected')

            process.exit(0)
        })
    })()