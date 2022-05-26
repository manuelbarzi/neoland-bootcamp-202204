const express = require('express')
const bodyParser = require('body-parser')
const { createUser, authenticateUser, retrieveUser, updateUser, deleteUser, createNote } = require('./logic')
const { ConflictError, FormatError, AuthError, NotFoundError } = require('./errors')
const { connect } = require('mongoose')
const generateToken = require('./helpers/generateToken')


connect('mongodb://127.0.0.1:27017/notes-db') // conecto con la base dde datos
    .then(() => { // cuando tengo la confirmacion de que estoy conectado a mongo
        console.log('DB connected') // hago un console log para avisarme

        const api = express()  //ejecutando un funcion y guardando el resutlado en api. 
        // la funcion es una clousure. conjunto de funciones get post con serie de cofig que no se puede acceder desde fuera. 
        // forma segura. no pouedes acceder sin pasar por api i la serie de protecciones que tiene

        const jsonBodyParser = bodyParser.json() // objeto que interpreta el json
        // se lo paso al post para decirle que recivira un json y lo meta en el body de la req



        // Create User
        api.post('/api/users', jsonBodyParser, (req, res) => { // tengo un express pediente de si recive un POST a users, y me devuelve (req, res)
            try {
                
                const { body: { name, username, password } } = req // extraigo las propiedades del body que me ha ggenerado jsonBodyParser
            
                createUser(name, username, password) // llamo a mi funcion
                    .then(() => res.status(201).send()) // cuando ha acabado, envio al res un status 201
                    .catch(error => { // si el registro lanza un error ASINCRONO que llega más tarde
                        let status = 500

                        if (error instanceof ConflictError)
                            status = 409

                        res.status(status).json({ error: error.message }) // respondo con un status de error 
                        // .json combina la funcion send y transformar a json
                    })
            } catch (error) { // si pillo errores SINCRONOS, 
                // lanzados directo de throw (ej. validaros), antes de llegar al siguiente then
                let status = 500

                if (error instanceof TypeError || error instanceof FormatError)
                    status = 400

                res.status(status).json({ error: error.message })
            }
        })



        // Authenticate
        api.post('/api/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { body: { username, password } } = req

                authenticateUser(username, password)
                    .then(userId => {
                        const token = generateToken(userId)

                        res.status(200).json( token )  // devuelvo estatus ok y el token
                    })  
                    .catch(error => {
                        let status = 500

                        if (error instanceof AuthError)
                            status = 401

                        res.status(status).json({ error: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof FormatError)
                    status = 400

                res.status(status).json({ error: error.message })
            }
        })


        //la info presento y recivo en json

        // Retrieve
        api.get('/api/users', jsonBodyParser, (req, res) => {
            try {
                
                const userId = verifyToken(req)

                retrieveUser(userId)
                    .then(user => res.status(200).json(user))  // devuelvo estatus ok y el token
                    .catch(error => {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({ error: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof FormatError)
                    status = 400

                res.status(status).json({ error: error.message })
            }
        })



        // Update
        api.patch('/api/users', jsonBodyParser, (req, res) => {
            try {

                const userId = verifyToken(req)

                const { body: { name, age, email, phone } } = req

                updateUser(userId, name, age, email, phone)
                    .then(() => res.status(204).send())  // devuelvo estatus modificado ok
                    .catch(error => {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({ error: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof FormatError || error instanceof RangeError)
                    status = 400

                res.status(status).json({ error: error.message })
            }
        })



        // Delete
        api.delete('/api/users', jsonBodyParser, (req, res) => {
            try {
                
                const userId = verifyToken(req)

                deleteUser(userId)
                    .then(() => res.status(200).send())  // devuelvo estatus ok y el token
                    .catch(error => {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({ error: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof FormatError)
                    status = 400

                res.status(status).json({ error: error.message })
            }
        })



        // ---------------   NOTES  --------------------



        // create
        api.post('/api/notes', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const { body: { text } } = req

                createNote(userId, text)
                    .then(noteId => res.status(201).json({ noteId }))
                    .catch(error => {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({ error: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof FormatError)
                    status = 400

                res.status(status).json({ error: error.message })
            }
        })



        api.listen(8080, () => console.log('API running'))
    })



// npm run start-watch


// mongoose sin pons id sin _ te devuelve en string