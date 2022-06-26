require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const {
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleUpdateUser,
    handleUnregisterUser,
    handleCreateFlat,
    handleRetrieveFlats,
    handleUpdateFlat,
    handleDeleteFlat,
    handleValidateToken,
    handleRetrieveFlat,
    handleCreateBooking,
    handleRetrieveBookings,
    handleDeleteBooking,
    handleUpdateUserPassword } = require('./handlers')
const { connect, disconnect } = require('mongoose')
const cors = require('cors')

const { env: { MONGODB_URL, PORT = 8080 }, argv: [, , port = PORT] } = process

    ; (async () => {
        await connect(MONGODB_URL)

        console.log(`DB connected on ${MONGODB_URL}`)

        const api = express()

        api.use(cors())

        const jsonBodyParser = bodyParser.json()

        const routes = express.Router()

        routes.post('/users', jsonBodyParser, handleRegisterUser)
        routes.post('/users/auth', jsonBodyParser, handleAuthenticateUser)
        routes.get('/users/auth', handleValidateToken)
        routes.get('/users', handleRetrieveUser)
        routes.patch('/users', jsonBodyParser, handleUpdateUser)
        routes.patch('/users/auth', jsonBodyParser, handleUpdateUserPassword)
        routes.delete('/users', jsonBodyParser, handleUnregisterUser)

        routes.post('/flats', jsonBodyParser, handleCreateFlat)
        routes.get('/flats', handleRetrieveFlats)
        routes.get('/flats/:flatId', handleRetrieveFlat)
        routes.patch('/flats/:flatId', jsonBodyParser, handleUpdateFlat)
        routes.delete('/flats/:flatId', jsonBodyParser, handleDeleteFlat)

        routes.post('/flats/:flatId/bookings', jsonBodyParser, handleCreateBooking)
        routes.get('/flats/:flatId/bookings', handleRetrieveBookings)
        routes.delete('/flats/:flatId/bookings/:bookingId', jsonBodyParser, handleDeleteBooking)

        api.use('/api', routes)

        api.listen(port, () => console.log(`API running on port ${port}`))

        process.on('SIGINT', async () => {
            await disconnect()

            console.log('\nDB disconnected')

            process.exit(0)
        })
    })()