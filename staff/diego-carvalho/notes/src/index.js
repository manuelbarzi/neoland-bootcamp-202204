const express = require('express')
const bodyParser = require('body-parser')
const {
    createUser,
    authenticateUser,
    retrieveUser,
    retrieveNotes
} = require('./logic')
const { parseCookies } = require('./utils')

//express es una framework de Node.js  
//server está retornando un conjunto de funciones(GET,POST...) con una serie de configuraciones que no si puede aceder desde fuera.
const server = express()//Llama a la función express() y coloca la nueva aplicación Express dentro de la variable de la aplicación (para iniciar una nueva aplicación Express), server.

server.use(express.static('public'))//

//Body-parser es el middleware de análisis de cuerpo de Node.js. Es responsable de analizar los cuerpos de solicitud entrantes en un middleware antes de manejarlo.
const formBodyParser = bodyParser.urlencoded({ extended: true })

//un (req) petición de register al servidor... 
server.get('/register', (req, res) => {
    try {
        //...hago un parse de las cookies para ver si hay este usuário.
        // Las cookies uso para manejar ls informaciones del usuário entre cliente(navegador web = Chrome, Mozilla...)) y servidor. Tal informaciones quedaran salvas en la cookie storage.
        const { userId } = parseCookies(req.header('cookie'))

        if (userId)//si recibo la cookie con el userId, el usuario ya exite...
            return res.redirect('/')//...y la función redirect() me redirige a la url de la ruta especificada(/home)...
        //...si no, obtengo el status 200(indica que la solicitud ha tenido éxito) y el formulario html de register.
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
        res.status(400).send(`<h1>${error.message}</h1>`)//si el status error 400( bad request) 
    }
})

//hago req del cliente al servidor, llamo a las lógicas de createUser p/ procesar esta petición y res al cliente con error o con la que haya pedido.
server.post('/register', formBodyParser, (req, res) => {
    try {
        const { name, username, password } = req.body
          
        createUser(name, username, password, (error, userId) => {
            if (error)
                return res.status(400).send(`<h1>${error.message}</h1>`)

            res.status(201).send(`<h1>User registered ${userId}</h1>`)
        })
    } catch (error) {
        res.status(400).send(`<h1>${error.message}</h1>`)//aqui status error 400( bad request) 
    }
})
//...si ha ido tudo bien con el register, ahora haré  lo mismo con Login.
//Hago una petición de login al servidor... 
server.get('/login', (req, res) => {
    try {
           //...hago un parse de las cookies para ver si hay este usuário.
        const { userId } = parseCookies(req.header('cookie'))

        if (userId)//si recibo la cookie con el userId, el usuario ya exite...
            return res.redirect('/')//...la función redirect() me redirige a la url de la ruta especificada(/home)...
        //...obtengo el status 200(indica que la solicitud ha tenido éxito) y el formulario html de login.
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
        res.status(400).send(`<h1>${error.message}</h1>`)//si el status error 400(bad request) si ha pasado algo malo en la sulicitud de GET.
    }
})

//hago req del cliente al servidor, llamo a la lógica authenticateUser p/ procesar esta petición y res al cliente con error o con la que haya pedido.
server.post('/login', formBodyParser, (req, res) => {
    try {
        const { username, password } = req.body
        //... la función authenticateUser autentica las info del usuário y con la callback me devolverá un error, caso tenga error, o una cookie con userId si error es null.    
        authenticateUser(username, password, (error, userId) => {
            if (error)
                return res.status(400).send(`<h1>${error.message}</h1>`)//error status 400( bad request)

            res.cookie('userId', userId)//si va todo bien, el navegador recibe una cookie de con userId de respuesta (res)...
            res.redirect(`/`)//... y la direccíon url de home.
        })
    } catch (error) {
        res.status(400).send(`<h1>${error.message}</h1>`)//si el status error 400(bad request) 
    }
})
//hago req del cliente al servidor, llamo a la lógica retrieveUser p/ procesar esta petición y res al cliente con error o con la que haya pedido.
server.get('/', (req, res) => {
    try {//try catch para manejar los errores sincronos
        //...hago un parse de las cookies para ver si hay este usuário(userId)
        const { userId } = parseCookies(req.header('cookie'))

        if (!userId)//si el userId(cookie) no existe...
            return res.redirect('/login')//en respuesta me redireciona a la url de login.
        //si ya existe, uso la función retrieveUser para recuperar las infos del usuário le pasando el userId y una callback con error,si algo va mal, y el user si todo va bien.
        retrieveUser(userId, (error, user) => {
            if (error)
                return res.status(400).send(`<h1>${error.message}</h1>`)//error status 400( bad request)
            //también uso la función retrieveNotes para recuperar las notas del usuário le pasando el userId y una callback con error,si algo va mal, y notes si todo va bien.
            retrieveNotes(userId, (error, notes) => {
                if (error)
                    return res.status(400).send(`<h1>${error.message}</h1>`)//error status 400( bad request)
                //si va todo bien, recibo una res de status 200 y el doc html de la home con los datos del usuário e los formularios para crear notas, salvalas y eliminalas.
                res.status(200).send(`<html>
                <head>
                    <link rel="stylesheet" href="index.css">
                <head>
                <body>
                    <h1>Hello, ${user.name}!</h1>
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
        res.status(400).send(`<h1>${error.message}</h1>`)//si el status error 400(bad request)
    }
})
//aqui hago un post con la ruta del button de logout para eleminar la cookie. 
server.post('/logout', (req, res) => {
    res.clearCookie('userId')//hago un clearCookie para eleminar la cookie...
    res.redirect('/login')// y luego que me rediriga a login.
})

server.post('/save-note', formBodyParser, (req, res) => {
    try {
        const { userId } = parseCookies(req.header('cookie'))

        if (!userId)
            return res.redirect('/login')

        const { text } = req.body

        // ... createNote(userId, text, error => { ... res.redirect('/') })
    } catch (error) {
        // ...
    }
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

server.listen(8080, () => console.log('server started'))
/*server.listen es una función que le pasamos un pueto 8080 donde será ejecutado nosso código
En este caso, le pasamos el puerto(8080) y una callback que si lanzará cuando el servidor sea ha lanzado.
Cuando hago "start" que és "node src/index.js",lo que estoy haciendo es ejecutar este archivo y he dejado confuguradas
las rutas (GET, POST... ) escuchando en el puerto 8080.

un servidor no es nada mais que un programa que si queda en la espera de escucha peticiones. Es como un portal para que ejecute las peticiones de forma segura.
*/