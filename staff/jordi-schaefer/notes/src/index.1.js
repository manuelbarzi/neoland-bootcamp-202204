const { createUser, authenticateUser, retrieveUser } = require('./logic')
const { readdir, readFile } = require('fs')
const express = require('express')
const bodyParser = require('body-parser')

const server = express()

// para interpretar lso datos que recivo del namegadro servidor
const formBodyParser = bodyParser.urlencoded({ extended: true })



server.get('/register', (req, res) => {

    const users = []
    let count = 0
    readdir(`./db/users`, (error, files) => { // leo todos los archivos que tengo
        files.forEach(file => {
            readFile(`./db/users/${file}`, 'utf8', (error, json) => {
                users[count] = JSON.parse(json).username
                count++
                if(count === files.length){

                    const usersList = users.join('   /  ')
                    res.status(200).send(`<html>
                        <head>
                            <div>${usersList}</div>
                        </head>
                        <body>
                            <form method="POST" action="/register" >
                            <input type="text" name="name" placeholder="name"/>
                            <input type="text" name="username" placeholder="username"/>
                            <input type="password" name="password" placeholder="password"/>
                            <button> Register </button>
                            </form>
                            <a href="http://localhost:8080/login">login</a>
                            
                            <div></div>
                        </body>
                    </html>`)
                }
            })
        })
    })

    
})


//cuando hago peticion primero pasa por el boyparser y lo pone en un objeto llamado body para que podamos acceder a todos los datos
server.post('/register', formBodyParser, (req, res) => {
    try {
        const { name, username, password } = req.body

        createUser(name, username, password, (error, userId) => {
            if(error)
                return res.status(400).send(`<h1>${error.message}</h1>`)
            
            res.status(201).send(`<h1>User ${username} registered!!! </h1>
                        <h1> with id: ${userId} </h1>`)
            // res.redirect(`/login`)
        })
    } catch(error){
        res.status(400).send(`<h1>${error.message}</h1>`)
    }

})


// --------------  PAGINA para LOGIN


server.get('/login', (req, res) => {
    res.status(200).send(`<html>
    <head><head>
    <body>
        <form method="POST" action="/login">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password" placeholder="password"/>
            <button>Login</button>
        </form>
        <a href="http://localhost:8080/register">register</a>
    </body>
    </html>`)
})

server.post('/login', formBodyParser, (req, res) => {
    try {
        const { username, password } = req.body

        authenticateUser(username, password, (error, userId) => {
            if (error) 
                return res.status(400).send(`<h1>${error.message}</h1>`)

            //res.send(`<h1>User authenticated ${userId}</h1>`)
            res.redirect(`/home?id=${userId}`)
        })
    } catch(error) {
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})




// --------------  PAGINA para LOGIN


// http://localhost:8080/home?id=gmeph37z2t6f8uh4oivf0n
server.get('/home', (req, res) => {
    
    try{
        const userId = req.query.id
        retrieveUser(userId, (error, user) => {
            if (error) {
                res.status(400).send(`<h1>${error.message}</h1>`)
                return
            }
            
            res.status(200).send(`<html>
            <body>
            <h1> User: ${user.name} </h1>
            <h1> Username: ${user.username} </h1>
            </body>
            </html>`)
        })
    
    } catch(error) {
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})



server.listen(8080, () => console.log('server started')) // cuando ya este ejecutndo el servicio nos permite tener una callback para hacer algo

// node src/index.js    (estando en la carpeta notes)
// npm start