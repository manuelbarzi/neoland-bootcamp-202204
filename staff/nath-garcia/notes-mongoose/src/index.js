const express = require('express')
const bodyParser = require('body-parser')
const { registerUser, authenticateUser } = require('./logic')
const { ConflictError, FormatError, AuthError } = require('./errors')
const { connect, disconnect } = require('mongoose')

connect('mongodb://localhost:27017/notes-db') //conecta con la base de datos
.then(() => { //cuando tenga la confirmación de estar conectado a Mongo
    console.log('DB connected') //mensaje de DB conectado

    const api = express()

    const jsonBodyParser = bodyParser.json() //Objeto que analiza y comprueba el body d elas solicitudesb entrantes y crea el cuerpo de la request

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

    api.post('/api/users/auth', jsonBodyParser, (req, res) => {
        try {
            const { body: { username, password } } = req

            authenticateUser(username, password)
            .then(userId => res.status(200).json({ token: userId }))
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

    api.listen(8080, () => console.log('API running'))
})