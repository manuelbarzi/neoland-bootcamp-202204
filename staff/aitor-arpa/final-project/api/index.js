const express = require ('express')
const { connect} = require('mongoose')
const { handleRegisterUser } = require('./handels')
const routes = express.Router()


(async () => {

    const bodyParser = require('body-parser')
    const jsonBodyParser = bodyParser.json()


    await connect('mongodb://127.0.0.1:27017/controlz') 
    routes.post('/Login', jsonBodyParser , handleRegisterUser )
   
    routes.post('/users/auth', jsonBodyParser, handleAuthenticateUser)
    
    routes.get('/users', handleRetrieveUser)
    
    routes.patch('/users', jsonBodyParser, handleUpdateUser)
   
    routes.delete('/users', jsonBodyParser, handleDeleteUse)
    
    console.log('DB connected') 
    
    
api.listen(8080, () => console.log('API running'))
})