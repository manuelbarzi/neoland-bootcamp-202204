const express = require('express')
const bodyParser = require('body-parser')
const { registerUser, authenticateUser, retrieveUser, updateUser, listNotes, createNote } = require('./logic')
const { ConflictError, FormatError, AuthError, NotFoundError } = require('./errors')
const { connect, disconnect } = require('mongoose')
const { generateToken, verifyToken } = require('./helpers')
const deleteUser = require('./logic/deleteUser')

connect('mongodb://localhost:27017/notes-db')
    .then(() => {
        console.log('DB connected')

        const api = express()
        // api.use(express.json())
        // https://www.geeksforgeeks.org/express-js-express-json-function/#:~:text=The%20express.,is%20based%20on%20body%2Dparser.&text=Parameters%3A%20The%20options%20parameter%20have,%2C%20limit%2C%20type%2C%20etc.

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

        api.patch('/api/users', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const { body: { name, age, email, phone } } = req

                updateUser(userId, name, age, email, phone)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        let status = 500

                        if (status instanceof NotFoundError) status = 404

                        res.json({ error: error.message })
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

                        if (error instanceof NotFoundError) status = 404

                        res.status(status).send({ error: error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof FormatError) status = 400

                res.status(status).send({ error: error.message })
            }
        })

        api.delete('/api/users', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)
                const { body: { password } } = req

                deleteUser(userId, password)
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
                        // res.status(status).send(JSON.stringify({ error: error.message }))
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof FormatError)
                    status = 400

                res.status(status).json({ error: error.message })
            }
        })

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

            listNotes(userId)
                .then(notes => {
                    res.status(200).json(notes)
                })
                .catch(error => {
                    let status = 500

                    if (error instanceof NotFoundError) status = 404

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