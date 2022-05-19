const express = require('express')
const bodyParser = require('body-parser')
const { createUser, authenticateUser, retriveUser } = require('./logic')
// npm start -> arracar el server
// siempre desde el directorio notes
const server = express()

const formBodyParser = bodyParser.urlencoded({ extended: true })

// http://localhost:8080/hello?name=Pepito (req)
// Hello, Pepito! (res)
// (middleware)
server.get('/hello', (req, res) => { // handler
    const name = req.query.name

    res.status(201).send(`<h1>Hello, ${name}!</h1>`)
})

server.get('/register', (req, res) => {
    res.send(`<html>
    <head><head>
    <body>
        <form method="POST" action="/register">
            <input type="text" name="name" placeholder="name">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password" placeholder="password"/>
            <button>Register</button>
        </form>
    </body>
    </html>`)
})

server.post('/register', formBodyParser, (req, res) => {
    try {
        const { name, username, password } = req.body

        createUser(name, username, password, (error, userId) => {
            if (error) 
                return res.status(400).send(`<h1>${error.message}</h1>`)

            res.send(`<h1>User registered ${userId}</h1>`)
        })
    } catch(error) {
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})

server.get('/login', (req, res) => {
    res.send(`<html>
    <head><head>
    <body>
        <form method="POST" action="/login">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password" placeholder="password"/>
            <button>Login</button>
        </form>
    </body>
    </html>`)
})

server.post('/login', formBodyParser, (req, res) => {
    try {
        const { username, password } = req.body

        authenticateUser(username, password, (error, userId) => {
            if (error) 
                return res.status(400).send(`<h1>${error.message}</h1>`)

            res.send(`<h1>User authenticated ${userId}</h1>`)
        })
    } catch(error) {
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})

server.listen(8080, () => console.log('server started'))

server.get('/login', (req, res) => {
    res.send(`<html>
    <head><head>
    <body>
        <form method="POST" action="/login">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password" placeholder="password"/>
            <button>Login</button>
        </form>
    </body>
    </html>`)
})
// http://localhost:8080/home?id=9vr9l3hwhnkwkn10z4fhjp 
server.get('/home', (req, res) => {
    try {
        const id = req.query.id

        retriveUser(id, (error, user) =>  {
            if (error) {
                res.status(400).send (`<h1>${error.message}</h1>`)
                return

            }

            res.status(200).send(`<html>
                <head><head>
                <body>
                
                <a href="http://localhost:8080/login">Logout</a>
                    <h1> HOME </h1>
                    <div>${user.name}</div>
                    <div>${user.username}</div>
                       </body>
                </html>`)
        })
    } catch(error) {
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})
