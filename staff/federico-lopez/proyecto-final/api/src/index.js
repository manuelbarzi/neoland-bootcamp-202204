require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { connect, disconnect } = require('mongoose')
const { 
    handleRegisterUser, 
    handleAuthenticateUser, 
    handleRetrieveUser, 
    handleUpdateUser, 
    handleUnregisterUser
} = require('./handlers')

const { env: { MONGODB_URL, PORT = 8080 }, argv: [, , port = PORT] } = process


    ; (async () => {
        await connect(MONGODB_URL)

        console.log(`DB connected on ${MONGODB_URL}`)

        const api = express()

        api.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Headers', '*')
            res.setHeader('Access-Control-Allow-Methods', '*')
            res.setHeader('Access-Control-Allow-Origin', '*')

            next()
        })

        const jsonBodyParser = bodyParser.json()

        const routes = express.Router()

        api.use('/api', routes)

        /* CRUD USERS */
        routes.post('/users', jsonBodyParser, handleRegisterUser)
        routes.post('/users/auth', jsonBodyParser, handleAuthenticateUser)
        routes.get('/users', handleRetrieveUser)
        routes.patch('/users', jsonBodyParser, handleUpdateUser)
        routes.delete('/users', jsonBodyParser, handleUnregisterUser)

        
        //     api.get('/api/users', handleRetrieveUser)
        //     api.patch('/api/users', jsonBodyParser, handleUpdateUser)
        //     api.delete('/api/users', jsonBodyParser, handleDeleteUser)

        //     /* CRUD NOTES */
        //     api.post('/api/notes', jsonBodyParser, handleCreateNote)
        //     api.get('/api/notes', handleRetrieveNotes)
        //     api.patch('/api/notes/:noteId', jsonBodyParser, handleUpdateNote)
        //     api.delete('/api/notes/:noteId', handleDeleteNote)
        //     api.get('/api/notes/public', handleRetrievePublicNotes)

        //     /* CRUD COMMENTS */
        //     api.post('/api/notes/:noteId', jsonBodyParser, handleAddCommentToNote)
        //     api.delete('/api/notes/:noteId/:commentId', handleDeleteComment)

        //     /* REACTIONS */
        //     api.post('/api/notes/:noteId/reactions/:type', jsonBodyParser, handleToggleReactionToNote)


        api.listen(port, () => console.log(`API running on port ${port}`))

        process.on('SIGINT', async () =>
            disconnect()
                .then(() => {
                    console.log('\nDB disconnected')

                    process.exit(0)
                })
        )
    })()