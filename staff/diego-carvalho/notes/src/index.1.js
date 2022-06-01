const express = require('express')
const bodyParser = require('body-parser')
const { createUser, authenticateUser, retrieveUser } = require('./logic')

//express es una framework de Node.js  
//server está retornando un conjunto de funciones(GET,POST...) con una serie de configuraciones que no si puede aceder desde fuera.
const server = express()

const formBodyParser = bodyParser.urlencoded({ extended: true })

server.get('/hello', (req, res) => {
    const name = req.query.name

    res.status(201).send(`<h1>Hello, ${name}!</h1>`)
})
/*hago un (req) petición (get)de register al servidor que me responde(res) un status 200(solicitud ha tenido éxito) y me envia un res (send) con un doc HTML.
Con el POST en el doc html estammos haciendo una llamada a la url register */
server.get('/register', (req, res) => {
    res.status(200).send(`<html>
    <head><head>
    <body>
        <form method="POST" action="/register">
            <input type="text" name="name" placeholder="name">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password"" placeholder="password"/>
            <button>Register</button>
        </form>
    </body>
    </html>`)
})
//aqui la enviamos un post (req)con las info (name, username, password)en el body del doc html...
server.post('/register', formBodyParser, (req, res) => {
    try {
        const { name, username, password } = req.body
     //...y la función creteUser con la callback de error, caso tenga error, y userId si error es null.    
        createUser(name, username, password, (error, userId) => {
            if (error)
                return res.status(400).send(`<h1>${error.message}</h1>`)//error status 400( bad request)

            res.status(201).send(`<h1>User registered ${userId}</h1>`)//status 201(Created) indica que la solicitud ha tenido éxito y ha llevado a la creación de un recurso.
        })
    } catch (error) {
        res.status(400).send(`<h1>${error.message}</h1>`)//aqui status error 400( bad request) si ha pasado algo malo en la sulicitud de POST.
    }
})
/*...si ha ido tudo bien con el register, ahora haré  lo mismo con Login.
Hago un (req) petición (get)de login al servidor que me responde(res) un status 200(solicitud ha tenido éxito) y me envia un res (send) con un doc HTML.
Con el POST en el doc html estammos haciendo una llamada a la url login*/
server.get('/login', (req, res) => {
    res.status(200).send(`<html>
    <head><head>
    <body>
        <form method="POST" action="/login">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password"" placeholder="password"/>
            <button>Login</button>
        </form>
    </body>
    </html>`)
})
//aqui la enviamos un post (req)con las info (username, password)en el body del doc html...
server.post('/login', formBodyParser, (req, res) => {
    try {
        const { username, password } = req.body
     //...y la función authenticateUser con la callback de error, caso tenga error, y si error es null, nos redireciona la home.
        authenticateUser(username, password, (error, userId) => {
            if (error)
                return res.status(400).send(`<h1>${error.message}</h1>`)//error status 400( bad request)

            //res.send(`<h1>User authenticated ${userId}</h1>`)
            res.redirect(`/home?userId=${userId}`)
        })
    } catch (error) {
        res.status(400).send(`<h1>${error.message}</h1>`)//aqui status error 400( bad request) si ha pasado algo malo en la sulicitud de POST.
    }
})
/*...si ha ido tudo bien con el login,en home, hago una (req) petición (get) al servidor que recupere (retrieveUser) el usuário...*/
server.get('/home', (req, res) => {
    try {
        const { userId } = req.query//...le passo el userId...
     //... y la función retrieveUser con la callback de error, caso tenga error, y si error es null...
        retrieveUser(userId, (error, user) => {
            if (error)
                return res.status(400).send(`<h1>${error.message}</h1>`)//error status 400( bad request)
             //nos devolve (res) el status 200(indica que la solicitud ha tenido éxito) y el doc html con la frase "Hello" y nombre del usuário.
            res.status(200).send(`<html>
            <head></head>
            <body>
                <h1>Hello, ${user.name}!</h1>
            <body>
            </html>`)
        })
    } catch (error) {
        res.status(400).send(`<h1>${error.message}</h1>`)//aqui status error 400( bad request) si ha pasado algo malo en la sulicitud de GET.
    }
})

server.listen(8080, () => console.log('server started'))
