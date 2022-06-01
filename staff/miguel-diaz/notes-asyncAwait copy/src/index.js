require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const { connect, disconnect } = require('mongoose')
const { handleRegisterUser, 
    handleAuthenticateUser, handleRetrieveUser, 
    handleUpdateUser, handleDeleteUser, 
    handleCreateNote, handleDeleteNote, 
    handleUpdateNote, handleListNotes,
    handleRetrievePublicNotes, 
    handleAddComment, handleDeleteComment,
    handleToggleReactionOnComment, handleToggleReactionOnNote } = require('./handlers')


;   (async () => {
    await connect('mongodb://127.0.0.1:27017/notes-db') 
    console.log('DB connected') 
    
    const api = express()
    
    const jsonBodyParser = bodyParser.json()

    const routes = express.Router()


    // <<<<    U    S    E    R    S    >>>>

    routes.post('/users', jsonBodyParser, handleRegisterUser)
    routes.post('/users/auth', jsonBodyParser, handleAuthenticateUser)
    routes.get('/users', handleRetrieveUser)
    routes.patch('/users', jsonBodyParser, handleUpdateUser)
    routes.delete('/users', jsonBodyParser, handleDeleteUser)
    
    

    // <<<<    N    O    T    E    S    >>>>

    routes.post('/notes', jsonBodyParser, handleCreateNote)
    routes.delete('/notes', jsonBodyParser, handleDeleteNote)
    routes.get('/notes', handleListNotes)
    routes.get('/notes/public', handleRetrievePublicNotes)
    routes.patch('/notes', jsonBodyParser, handleUpdateNote)
    
    
    // <<<<  C   O   M   M   E   N   T   S   >>>>

    routes.post('/notes/:noteId/comments', jsonBodyParser, handleAddComment)
    routes.delete('/notes/:noteId/comments/:commentId', jsonBodyParser, handleDeleteComment)
    routes.patch('/notes/:noteId/reactions/:reactionCode', jsonBodyParser, handleToggleReactionOnNote)
    routes.patch('/notes/:noteId/comments/:commentId/reactions/:reactionCode', jsonBodyParser, handleToggleReactionOnComment)



    api.use('/api', routes)

    api.listen(8080, () => console.log('API running'))

    process.on('SIGINT', async () => {
        await disconnect()

        console.log('\n>>>>> JORDI TE QUIERO!!! <<<<<<')
        console.log('\n>>>>>    JOPUTA   !!! <<<<<<')
        console.log('\n>>>>> NO TE VAYAS !!! <<<<<<')
        console.log('\n>>>>>    CABRONNN  !!! <<<<<<')
        console.log('\n>>>>>     VUELVE   !!! <<<<<<')
        console.log('\n>>>>>    TETESIKO   !!! <<<<<<')

        process.exit(0)
    })

})()
