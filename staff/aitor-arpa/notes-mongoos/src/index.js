require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { connect, disconnect } = require('mongoose')
const { handleRegisterUser,handleAuthenticateUser, handleRetrieveUser,handleUpdateUser, handleDeleteUser, handleDeleteNote,handleRetrievePublicNotes, handleUpdateNote, handleSaveComment, handleCreateNote, handleListNotes, deleteCommentFromNote} = require('./handlers')


    ;(async () => {
        await connect('mongodb://127.0.0.1:27017/notes-db') // conecto con la base dde datos
        console.log('DB connected') // hago un console log para avisarme

        const api = express()  //ejecutando un funcion y guardando el resutlado en routes. 
        // la funcion es una clousure. conjunto de funciones get post con serie de cofig que no se puede acceder desde fuera. 
        // forma segura. no pouedes acceder sin pasar por api i la serie de protecciones que tiene

        const jsonBodyParser = bodyParser.json() // objeto que interpreta el json
        // se lo paso al post para decirle que recivira un json y lo meta en el body de la req

        const routes = express.Router()


        // <<<<<         U S E R S         >>>>

        // Create User
        routes.post('/users', jsonBodyParser, handleRegisterUser)
        // Authenticate
        routes.post('/users/auth', jsonBodyParser, handleAuthenticateUser)
        // Retrieve
        routes.get('/users', handleRetrieveUser)
        // Update
        routes.patch('/users', jsonBodyParser, handleUpdateUser)
        // Delete
        routes.delete('/users', jsonBodyParser, handleDeleteUser)


        // <<<<<<     N O T E S   >>>>>>>>>>>>>>>


        // Crear
        routes.post('/notes', jsonBodyParser, handleCreateNote)
        // Delete 
        routes.delete('./notes/:noteId', jsonBodyParser, handleDeleteNote)
        // List Notes
        routes.get('./notes/:noteId', jsonBodyParser, handleListNotes)
        // retrivePublicNotes
        routes.get('./notes/public', jsonBodyParser, handleRetrievePublicNotes)
        // Update Notes
        routes.get('./notes/:noteId', jsonBodyParser, handleUpdateNote)


        // <<<<<<    C O M E N T S   >>>>>>>>>>>>>>>

        // Save Coments
        routes.post('./notes/:noteid/coment/:commentId', jsonBodyParser, handleSaveComment)
        // Delet Coments
        routes.delete('./notes/:noteid/comments/:commentI', jsonBodyParser, deleteCommentFromNote)

        api.use('/api', routes)

        api.listen(8080, () => console.log('API running'))
        process.on('SIGINT', async () => {
            await disconnect()

            console.log('\nDB disconnected')

            process.exit(0)
        })
    })()