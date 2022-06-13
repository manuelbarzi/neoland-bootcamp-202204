require('dotenv').config()
const { cors } = require('./helpers')
const express = require('express')
const bodyParser = require('body-parser')
const { connect, disconnect } = require('mongoose')
const { handleRegisterUser,handleAuthenticateUser,handleDeleteUser,handleRetrieveUser} = require('./handels')


 ;(async () => {
    await connect('mongodb://localhost:27017/controlz') 
    console.log('DB connected')
    const api = express() 
 
    api.use(cors)        
    const jsonBodyParser = bodyParser.json()    
    const routes = express.Router()
    debugger
 
    routes.post('/login', jsonBodyParser, handleRegisterUser)
    routes.post('/login/auth', jsonBodyParser, handleAuthenticateUser)
    routes.delete('/users', jsonBodyParser, handleDeleteUser)
    routes.get('/user', handleRetrieveUser)
   
    /* routes.patch('/users', jsonBodyParser, handleUpdateUser) */
   
    
    
    api.use('/api', routes) 
   
    api.listen(8080, () => console.log('API running'))

    process.on('SIGINT', async () => {
        await disconnect()

        console.log('\nDB disconnected')
        
        process.exit(0)
    })
})()
