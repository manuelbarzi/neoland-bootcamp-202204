//como si hablara el servidor

const express = require('express')
const bodyParser = require('body-parser')
const {
    createUser,
    authenticateUser,
    retrieveUser,
    retrieveNotes
} = require('./logic')
const { parseCookies } = require('./utils')

const server = express() //ejecutando un funcion y guardando el resutlado en server. la funcion es una clousure. conjunto de funciones get post con serie de cofig que no se puede acceder desde fuera. forma segura. no pouedes acceder sin pasar por server i la serie de protecciones que tiene
                        
server.use(express.static('public'))

const formBodyParser = bodyParser.urlencoded({ extended: true })

server.get('/register', (req, res) => {
    try {
        const { userId } = parseCookies(req.header('cookie')) //dame este parametro del query

        if (userId)
            return res.redirect('/')

        res.status(200).send(`<html>
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
    } catch (error) {
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})

server.post('/register', formBodyParser, (req, res) => {
    try {
        const { name, username, password } = req.body

        createUser(name, username, password, (error, userId) => {
            if (error)
                return res.status(400).send(`<h1>${error.message}</h1>`)

            res.status(201).send(`<h1>User registered ${userId}</h1>`)
        })
    } catch (error) {
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})

server.get('/login', (req, res) => {
    try {
        const { userId } = parseCookies(req.header('cookie')) 

        if (userId)
            return res.redirect('/') //dile al navegador que se redirija a home

        res.status(200).send(`<html>
            <head><head>
            <body>
                <form method="POST" action="/login">
                    <input type="text" name="username" placeholder="username">
                    <input type="password" name="password" placeholder="password"/>
                    <button>Login</button>
                </form>
            </body>
            </html>`)
    } catch (error) {
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})

//configura llamada post a la url login. el req son las credenciales que el cliente envia al server
server.post('/login', formBodyParser, (req, res) => {
    try {
        const { username, password } = req.body

        authenticateUser(username, password, (error, userId) => {
            if (error)
                return res.status(400).send(`<h1>${error.message}</h1>`)

            res.cookie('userId', userId)
            res.redirect(`/`)
        })
    } catch (error) {
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})
/*que pasa conceptualmente para que yo pueda ver la nota en el servidor poniendo localhost8080 y salga.
2 conceptos: 
1. -que requiero: yo hago una petición con un get a la dirección localhost tal, que llama a una api o servidor que esta montada con express el cual tiene la ruta noseqe, esto llama a un logic
cuando el usuario manda ese get, mi servidor llama a una función logic (una de las capas) primero al retrivelogic para que llame a retrievenotes.
llama a las lógicas necesarias para procesar esta petición y responde al cliente con error o con lo que haya pedido

que responde, 
el servidor y 
las llamadas (verbo servidor)
2.capas
-logic que conecta las dos
-base de datos para almacenar
-index server

*/

server.get('/', (req, res) => { //server añademe al escuchador cuando intenten hacer un get a home, cuando se haya hecho me lanzas todo el código
        //manejar la request del cliente, llama a las lógicas necesarias para procesar esta petición y responde al cliente con error o con lo que haya pedido
    
    
    try {
        const { userId } = parseCookies(req.header('cookie'))
    
        if (!userId)
            return res.redirect('/login')
    
        retrieveUser(userId, (error, user) => {
            if (error)
                return res.status(400).send(`<h1>${error.message}</h1>`)
    
            retrieveNotes(userId, (error, notes) => {
                if (error)
                    return res.status(400).send(`<h1>${error.message}</h1>`)
    
                res.status(200).send(`<html>
                <head>
                    <link rel="stylesheet" href="index.css">
                <head>
                <body>
                    <h1>Hello, ${user.name}!</h1>
                    <form method="POST" action="/logout">
                        <button>Logout</button>
                    </form>
                    <ul>
                        ${notes.map(note => `<li>
                        <form method="POST" action="/save-note/${note.id}">
                                <textarea name="text">${note.text}</textarea>
                                <button>Save</button>
                            </form>
                            <form method="POST" action="/delete-note/${note.id}">
                                <button>x</button>
                            </form>
                        </li>`).join('')}
                    </ul>
                    <form method="POST" action="/save-note">
                        <button>+</button>
                    </form>
                </body>
                </html>`)
            })
        })
    } catch (error) {
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})
    
server.post('/save-note', formBodyParser, (req, res) => {
    try {
        const { userId } = parseCookies(req.header('cookie'))
    
        if (!userId)
            return res.redirect('/login')
    
        saveNote(userId, null, null, (error, noteId) => {
            if (error)
                return res.status(400).send(`<h1>${error.message}</h1>`)
    
            res.redirect('/')
        })
    } catch (error) {
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})
    
server.post('/save-note/:noteId', formBodyParser, (req, res) => {
    try {
        const { userId } = parseCookies(req.header('cookie'))
    
        if (!userId)
            return res.redirect('/login')
    
        const { params: { noteId }, body: { text } } = req
    
        saveNote(userId, noteId, text, (error, noteId) => {
            if (error)
                return res.status(400).send(`<h1>${error.message}</h1>`)
    
            res.redirect('/')
        })
    } catch (error) {
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})
    
server.post('/logout', (req, res) => {
    res.clearCookie('userId')
    res.redirect('/login')
})
    
server.post('/delete-note/:noteId', (req, res) => {
    try {
        const { userId } = parseCookies(req.header('cookie'))
    
        if (!userId)
            return res.redirect('/login')
    
        const { noteId } = req.params
    
            // ... deleteNote(userId, noteId, error => ... res.redirect('/') )
    
        res.send(`TODO delete note with id ${noteId}`)
    } catch (error) {
            // ...
    }
})
    
server.listen(8080, () => console.log('server started')) //funcion donde le pasamos un puerto y una callback cuando el servidor s eha lanzado. dejas configurada las rutas de get, post... y quedas a la espera de escuchar peticiones. servidor que espera a escuhar peticiones