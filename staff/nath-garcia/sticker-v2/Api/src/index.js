const express = require('express')
const bodyParser = require('body-parser')
const { registerUser, authenticateUser, retrieveUser, updateUser, createNote, retrieveNotes, updateNote, addCommentToNote } = require('./logic')
const { ConflictError, FormatError, AuthError, NotFoundError } = require('./errors')
const { connect, disconnect } = require('mongoose')
const { generateToken, verifyToken } = require('./handlers/helpers')

connect('mongodb://localhost:27017/notes-db') //conecta con la base de datos
.then(() => { //cuando tenga la confirmación de estar conectado a Mongo
    console.log('DB connected') //mensaje de DB conectado

    const api = express()

    const jsonBodyParser = bodyParser.json() //Objeto que analiza y comprueba el body d elas solicitudesb entrantes y crea el cuerpo de la request
//registerUser
    api.post('/api/users', jsonBodyParser, (req, res) => {
        try{ //sincrono
            const { body: { name, username, password } } = req
            debugger
            registerUser(name, username, password)
            .then(() => res.status(201).send()) //asincrono
            .catch(error => { //asincrono
                let status = 500

                if (error instanceof ConflictError) status = 409

                res.status(status).json({ error: error.message })
                // res.status(status).send(JSON.stringify({ error: error.message }))
            })
        } catch (error) { //sincrono
            let status = 500

            if(error instanceof TypeError || error instanceof FormatError)
            status = 400

            res.status(status).json({ error: error.message })
        }
    })
//authenticateUser
    api.post('/api/users/auth', jsonBodyParser, (req, res) => {
        try {
            const { body: { username, password } } = req

            authenticateUser(username, password)
            .then(userId => {
                const token = generateToken(userId)

                res.status(200).json({ token })
            })
            .catch(error => {
                let status = 500

                if(error instanceof AuthError)
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
//retrieveUser
    api.get('/api/users', (req, res) => {
        try {
            const userId = verifyToken(req)
            retrieveUser(userId)
            .then(user => res.status(200).json(user))
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
    //updateUser
    api.patch('/api/users', jsonBodyParser, (req, res) => {
        debugger
        try {
            // const { headers: { authorization } } = req

            // const [, token] = authorization.split(' ')
            // const { sub: userId } = verify(token, 'a pepito le gusta el nudismo')


            const userId = verifyToken(req)

            const { body: { name, age, email, phone } } = req

            updateUser(userId, name, age, email, phone)
            .then(() => res.status(204).send())
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

    //createNotes
    debugger
    api.post('/api/notes', jsonBodyParser, (req, res) => {
        try{ //sincrono
            const userId = verifyToken(req)

            const { body: { text } } = req

            createNote(userId, text )
            .then(notes => res.status(200).json({notes}))
                
            .catch(error => { //asincrono
                let status = 500

                if (error instanceof ConflictError) status = 409

                res.status(status).json({ error: error.message })
                // res.status(status).send(JSON.stringify({ error: error.message }))
            })
        } catch (error) { //sincrono
            let status = 500

            if(error instanceof TypeError || error instanceof FormatError)
            status = 400

            res.status(status).json({ error: error.message })
        }
    })

    //retrieveNotes
    api.get('/api/notes', (req, res) => {
        try {
            const userId = verifyToken(req)
            retrieveNotes(userId)
            .then(notes => res.status(200).json({notes}))
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

    //addCommentToNote 
    api.post('/api/notes/:noteId', jsonBodyParser, (req, res) => {
        try{ //sincrono
            const userId = verifyToken(req)
    
            const { params: { noteId }, body: { text } } = req
    
            addCommentToNote(userId, noteId, text )
            .then(notes => res.status(200).json({notes}))
                
            .catch(error => { //asincrono
                let status = 500
    
                if (error instanceof ConflictError) status = 409
    
                res.status(status).json({ error: error.message })
                // res.status(status).send(JSON.stringify({ error: error.message }))
            })
        } catch (error) { //sincrono
            let status = 500
    
            if(error instanceof TypeError || error instanceof FormatError)
            status = 400
    
            res.status(status).json({ error: error.message })
        }
    })
    api.listen(8080, () => console.log('API running'))
})

