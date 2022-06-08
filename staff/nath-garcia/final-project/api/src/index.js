require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const { connect, disconnect } = require('mongoose')
const { cors } = require('./helpers')
const morgan = require('morgan')
const logger = require('./logger')

const { env: { MONGODB_URL, PORT = 8080 }, argv: [, , port = PORT] } = process

    ; (async () => {
        await connect(MONGODB_URL)

        logger.info(`DB conected to ${MONGODB_URL}`)

        const api = express()

        api.use(cors)

        const jsonBodyParser = bodyParser.json()

        api.listen(port, () => logger.info(`API running on port ${port}`))

        process.on('SIGINT', async () => {
            await disconnect()

            logger.info('\nDB disconnected')

            process.exit(0)
        })
    })