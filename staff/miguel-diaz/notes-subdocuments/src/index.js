const express = require('express')
const bodyParser = require('body-parser')
const { registerUser, authenticateUser, retrieveUser, updateUser, createNote, retrieveNote, updateNote, listNotes, unregisterUser, addComment } = require('./logic')
const { ConflictError, FormatError, AuthError, NotFoundError } = require('./errors')
const { connect } = require('mongoose')
const { generateToken, verifyToken } = require('./helpers')
const deleteNote = require('./logic/deleteNote')
const deleteComment = require('./logic/deleteComment')
const { comment } = require('./models/schemas')

connect('mongodb://localhost:27017/notes-db')
    .then(() => {
        console.log('DB connected')

        const api = express()

        const jsonBodyParser = bodyParser.json()

        api.post('/api/users', jsonBodyParser, (req, res) => {
            try {
                const { body: { name, username, password } } = req

                registerUser(name, username, password)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        let status = 500

                        if (error instanceof ConflictError)
                            status = 409

                        res.status(status).json({ error: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof FormatError)
                    status = 400

                res.status(status).json({ error: error.message })
            }
        })

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

        api.patch('/api/users', jsonBodyParser, (req, res) => {
            try {
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


        api.delete('/api/users', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)
                const { body: { password } } = req

                unregisterUser(userId, password)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        let status = 500

                        if (error instanceof AuthError) status = 401

                        res.status(status).json({ error: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof FormatError) status = 400

                res.status(status).send({ error: error.message })
            }
        })



        // <<<<<<     N      O       T       E        S   >>>>>>>>>>>>>>>

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


        api.get('/api/notes', (req, res) => {
            try {
                const userId = verifyToken(req)

                retrieveNote(userId)
                    .then(noteId => res.status(200).json(noteId))
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

        api.patch('/api/notes/:noteId', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const { params: { noteId}, body: {text} } = req

                updateNote(userId, noteId, text)
                    .then(text => res.status(204).send(text))
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


        api.get('/api/notes', (req, res) => {
            try {
                const userId = verifyToken(req)

                listNotes(userId)
                    .then(noteId => res.status(200).json(noteId))
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


        api.delete('/api/notes', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)
                const { body: { noteId } } = req

                deleteNote(userId, noteId)
                    .then(noteId => res.status(204).send(noteId))
                    .catch(error => {
                        let status = 500

                        if (error instanceof AuthError) status = 401

                        res.status(status).json({ error: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof FormatError) status = 400

                res.status(status).send({ error: error.message })
            }
        })







        // <<<<<<<< C   O   M   M   E   N   T   S   >>>>>>>>>>

        api.patch('/api/comments/:noteId', jsonBodyParser, (req, res) => {
            try {

                const userId = verifyToken(req)

                const { params: {noteId}, body: {text, loveu} } = req

                addComment(userId, noteId, text, loveu)
                    .then(() => res.status(204).send())  
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

        api.delete('/api/secrets', jsonBodyParser, (req, res) => {
            try {
                
                const userId = verifyToken(req)

                const { body: { note, comment } } = req

                deleteComment(userId, note, comment)
                    .then(() => res.status(200).send())
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