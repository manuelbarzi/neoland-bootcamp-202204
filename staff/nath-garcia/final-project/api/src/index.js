require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const {
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleUpdateUser,
    handleDeleteUser,
    handleAddMovement,
    handleRetrieveMovements,
    handleUpdateMovement,
    handleDeleteMovement,
    handleCreateAccount,
    handleRetrieveAccounts,
    handleUpdateAccount,
    handleDeleteAccount
} = require('./handlers')
const { connect, disconnect } = require('mongoose')
const { cors } = require('./helpers')
const morgan = require('morgan')
const logger = require('./logger')

const { env: { MONGODB_URL, PORT = 8080 }, argv: [, , port = PORT] } = process

    ; (async () => {
        await connect(MONGODB_URL)

        logger.info(`DB connected to ${MONGODB_URL}`)

        const api = express()

        api.use(morgan('dev'))

        api.use(cors)

        const jsonBodyParser = bodyParser.json()

        const routes = express.Router()

        routes.post('/users', jsonBodyParser, handleRegisterUser)
        routes.post('/users/auth', jsonBodyParser, handleAuthenticateUser)
        routes.get('/users', handleRetrieveUser)
        routes.patch('/users', jsonBodyParser, handleUpdateUser)
        routes.delete('/users', jsonBodyParser, handleDeleteUser )

        routes.post('/movements', jsonBodyParser, handleAddMovement)
        routes.get('/movements', handleRetrieveMovements)
        routes.patch('/movements/:movementId', jsonBodyParser, handleUpdateMovement)
        routes.delete('/movements/:movementId', jsonBodyParser, handleDeleteMovement)

        routes.post('/accounts', jsonBodyParser, handleCreateAccount)
        routes.get('/accounts', handleRetrieveAccounts)
        routes.patch('/accounts/:accountId', jsonBodyParser, handleUpdateAccount)
        routes.delete('/accounts/:accountId', jsonBodyParser, handleDeleteAccount)

        api.use('/api', routes)

        api.listen(port, () => logger.info(`API running on port ${port}`))

        process.on('SIGINT', async () => {
            await disconnect()

            logger.info('\nDB disconnected')

            process.exit(0)
        })
    })()