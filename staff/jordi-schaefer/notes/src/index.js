const express = require('express')
const bodyParser = require('body-parser')
const { createUser,
        authenticateUser,
        retrieveUser,
        retrieveNotes,
        createNote,
        deleteNote
} = require('./logic')
const { parseCookies } = require('./utils')

// ejecutamos la funcion y guardamos el resultado en server
// retorna un conjunto de ejecuciones (get, post.. )
const server = express()


server.use(express.static('public'))

// para interpretar lso datos que recivo del namegadro servidor
const formBodyParser = bodyParser.urlencoded({ extended: true })


debugger

server.get('/register', (req, res) => {

    try{
        //const userId = req.query.id
        const { userId } = parseCookies(req.header('cookie'))

        if (userId)
            return res.redirect(`/`)
        
        res.status(200).send(`<html>
            <head>
                <link rel="stylesheet" href="index.css">
            <head>
            <body>
                <form method="POST" action="/register" >
                    <input type="text" name="name" placeholder="name"/>
                    <input type="text" name="username" placeholder="username"/>
                    <input type="password" name="password" placeholder="password"/>
                    <button> Register </button>
                </form>
                <a href="http://localhost:8080/login">login</a>
                
            </body>
        </html>`)
    
    } catch(error) {
        res.status(400).send(`<h1>${error.message}</h1>`)
    }   
})



//cuando hago peticion primero pasa por el boyparser y lo pone en un objeto llamado body para que podamos acceder a todos los datos
server.post('/register', formBodyParser, (req, res) => {
    try {
        const { name, username, password } = req.body

        createUser(name, username, password, (error, userId) => {
            if(error)
                return res.status(400).send(`<h1>${error.message}</h1>`)
            
            //res.status(201).send(`<h1>User ${username} registered!!! </h1>
            //            <h1> with id: ${userId} </h1>`)
            res.redirect(`/login`)
        })

    } catch(error){
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})


// --------------  PAGINA para LOGIN


server.get('/login', (req, res) => {

    try{
        //const userId = req.query.id
        const { userId } = parseCookies(req.header('cookie'))

        if (userId)
            return res.redirect(`/`)
        
        res.status(200).send(`<html>
            <head>
                <link rel="stylesheet" href="index.css">
            <head>
            <body>
                <form method="POST" action="/login">
                    <input type="text" name="username" placeholder="username">
                    <input type="password" name="password" placeholder="password"/>
                    <button>Login</button>
                </form>
                <a href="http://localhost:8080/register">register</a>
            </body>
            </html>`)
    
    } catch(error) {
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})


server.post('/login', formBodyParser, (req, res) => {
    try {
        const { username, password } = req.body

        authenticateUser(username, password, (error, userId) => {
            if (error) 
                return res.status(400).send(`<h1>${error.message}</h1>`)

            //res.send(`<h1>User authenticated ${userId}</h1>`)
            //res.redirect(`/home?id=${userId}`)
            res.cookie('userId', userId)
            res.redirect(`/`)
        })

    } catch(error) {
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})



server.get('/', (req, res) => {
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
                debugger
                res.status(200).send(`<html>
                <head>
                    <link rel="stylesheet" href="index.css">
                <head>
                <body>
                    <h1>Hello,  </h1> <h1>   ${user.name}    !</h1>
                    <form method="POST" action="/logout">
                        <button>Logout</button>
                    </form>
                    <form method="POST" action="/create-note">
                        <textarea name="text"></textarea>
                        <button>Save</button>
                    </form>
                    <ul>
                        ${notes.map(note => `<li>
                            ${note.text}
                            <form method="POST" action="/delete-note/${note.id}">
                                <button>x</button>
                            </form>
                        </li>`).join('')}
                    </ul>
                </body>
                </html>`)
            })
        })

    } catch (error) {
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})



server.post('/logout', (req, res) => {
    res.clearCookie('userId')
    res.redirect('/login')
})



server.post('/create-note', formBodyParser, (req, res) => {
    try {
        const { userId } = parseCookies(req.header('cookie'))

        if (!userId)
            return res.redirect('/login')

        const { text } = req.body
        
        createNote(userId, text, (error) => { 
            if (error)
                return res.status(400).send(`<h1>callback ${error.message}</h1>`)

            res.redirect('/') 
        })

    } catch (error) {
        res.status(400).send(`<h1> no callback ${error.message}</h1>`)
    }
})



server.post('/delete-note/:noteId', (req, res) => {
    try {
        const { userId } = parseCookies(req.header('cookie'))

        if (!userId)
            return res.redirect('/login')

        const { noteId } = req.params

        deleteNote(userId, noteId, error => {
            if (error)
                return res.status(400).send(`<h1>${error.message}</h1>`)

            res.redirect('/')
        })

    } catch (error) {
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})


// cuando ya este ejecutando el servicio nos permite tener una callback para hacer algo
server.listen(8080, () => console.log('server started')) 





// node src/index.js    (estando en la carpeta notes)
// npm start


// nodemon src