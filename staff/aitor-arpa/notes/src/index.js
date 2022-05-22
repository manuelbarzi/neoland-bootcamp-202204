const express = require('express')
const bodyParser = require('body-parser')
const { createUser, authenticateUser, retriveUser, retrieveNotes, createNote, deleteNote } = require('./logic')
// npm start -> arracar el server
// siempre desde el directorio notes
const { parseCookies } = require('./utils')
const { cookie } = require('express/lib/response')
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

    try {
        const { userId } = parseCookies(req.header('cookie'))

        if (userId)
            return res.redirect('/')

        res.status(200).send(`<html>
            <head><head>
            <body>
                <form method="POST" action="/login">
                    <input type="text" name="name" placeholder="name">
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

server.post('/register', formBodyParser, (req, res) => {
    try {
        const { name, username, password } = req.body

        createUser(name, username, password, (error, userId) => {
            if (error)
                return res.status(400).send(`<h1>${error.message}</h1>`)

            res.send(`<h1>User registered ${userId}</h1>`)
        })
    } catch (error) {
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})

server.get('/login', (req, res) => {
    try {
        const { userId } = parseCookies(req.header('cookie'))

        if (userId)
            return res.redirect('/')

        res.send(`<html>
    <head><head>
    <body>
    <a href="http://localhost:8080/register">Go to Register</a>
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

server.listen(8080, () => console.log('server started'))

// http://localhost:8080/home?id=9vr9l3hwhnkwkn10z4fhjp 
server.get('/', (req, res) => {
    try {
        const { userId } = parseCookies(req.header('cookie'))

        if (!userId)
            return res.redirect('/login')

        retriveUser(userId, (error, user) => {
            if (error)
                return res.status(400).send(`<h1>${error.message}</h1>`)
            retrieveNotes(userId, (error, notes) => {
                if (error)
                    return res.status(400).send(`<h1>${error.message}</h1>`)


                // TODO falta implementar CSS en el head
                res.status(200).send(`<html>
                <head>
                
                <head>
                <body>
                <div>
                    <h1> Welcome ${user.name} !! </h1>
                    ${user.username}</div>
                    <form method="POST" action="/logout">
                    <button>Logout</button>
                </form>
                <form method="POST" action="/save-note">
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
        // TODO Implementar el create Note con redirect a /
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})

server.post('/logout', (req, res) => {
    res.clearCookie('userId')
    res.redirect('/login')

})
server.post('/save-note', formBodyParser, (req, res) => {
    try {
        const { userId } = parseCookies(req.header('cookie'))

        if (!userId)
            return res.redirect('/login')

        const { text } = req.body

        createNote(userId, text, error =>{
            if (error)
            return res.status(400).send(`<h1>${error.message}</h1>`)

            res.redirect('/')

        })
        // ... createNote(userId, text, error => { ... res.redirect('/') })
    } catch (error) {
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})


server.post('/delete-note/:noteId', (req, res) => {
    try {
        const { userId } = parseCookies(req.header('cookie'))
        // Con parseCookies es la funcion que nostros hemos creado para sacar el ID limpio y la pasamos por 
        // cookie  con ella jugaremos para traer sus notas y restingir un poco la navegacion 

        if (!userId)
            return res.redirect('/login')
        const { noteId } = req.params
        // implementar la logica de deleteNote con redirect a /
        deleteNote(noteId, userId, error =>{
            if (error)
            return res.status(400).send(`<h1>${error.message}</h1>`)

            res.redirect('/')

        })

       
    } catch (error) {
        // averigua por donde sigue 
    }
})
