//creemos un server con express

const express = require('express')
const bodyParser = require('body-parser')
const { createUser, authenticateUser, retrieveUser } = require('./logic')

const server = express()

const formBodyParser = bodyParser.urlencoded({ extended: true })

// http://localhost:8080/hello?name=Pepito //llamamos servidor(req)
//Hello Pepito //el servidor nos responde este html (res)
//(middleware)

server.get('/hello', (req, res) => { //ES UN HANDLE, UN MANEJADOR DE LA RESPUESTA: porque con la request me quedo con lo de despues de ? y con response respondo. con express pone la request i la response en dos objetos diferentes i te lo envia un callback. crea una ruta con el metodo get en la ruta hello i con el callback me enviaras la request i la response de la peticion para que yo pueda procesar todo eso
    
    const name= req.query.name //hay un objeto que es query que express ya te pone los parametros que le pongas en la ruta despues de ?
    
    res.status(201).send(`<h1>Hello, ${name}!</h1>`) //envia al cliente osea al navegador un template string que sea hello+name
})

server.get('/register', (req, res) => { //le decimos que nos envie el formulario de register
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
})//ponemos en method que sea un post para que no vuelva hacer un get del formulario y podeamos enviar datos y action la ruta

server.post('/register', formBodyParser, (req,res) => { //recoger datos del body de la petición. recoger formulario. interpretar datos que enviamos del navegador al servidor. me la pone en la request, me da los parametros del post masticados
    try{
        const { name, username, password } = req.body //me crea el body con el parser

        createUser(name, username, password, (error, userId) => {
            if (error)
                return res.status(400).send(`<h1>${error.message}</h1>`) //solicitud incorrecta
            
            res.status(201).send(`<h1>User registered ${userId}</h1>`) //envia un string que es un html y lo pinta

        })
    }catch (error) { //ponemos trycatch porque si en el proceso de req o res tenemos un error que no nos llegue tarde por asincronia
        res.status(400).send(`<h1>${error.message}</h1>`)
    }
})
/*porque tenemos dos res errores? la segunda respuesta es la misma que la de arriba pero se lanza una respuestra de errores sincronos, una vez llega a req todo el codigo es sincrono. el try es un manejador de errores sincronos va a ser una respuesta sincrona, tenemos una peticion y la estamos procesando al instante
si por lo que sea el destructurin falla o el createuser salta con los validadores que son sincronos se va capturar la respuesta con un error 400
en el momento que ya entremos en el readdir los dos caminos posibles son los de dentro del create user o error 400 o user registered, los dos con la callback que se pasa de createuser ya que las callback son en asincronia


*/


server.get('/login', (req, res) => {
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
})

server.post('/login', formBodyParser, (req, res) => {
    try{
        const { username, password } = req.body

        authenticateUser(username, password, (error, userId) => {
            if(error)
                return res.status(400).send(`<h1>${error.message}</h1>`)
             //res.send(`<h1>User authenticated ${userId}</h1>`)
             res.redirect(`/home?userId=${userId}`)
            })
        } catch (error) {
            res.status(400).send(`<h1>${error.message}</h1>`)
        }
    })
    
server.get('/home', (req, res) => {
        try {
            const { userId } = req.query
    
            retrieveUser(userId, (error, user) => {
                if (error)
                    return res.status(400).send(`<h1>${error.message}</h1>`)
    
                res.status(200).send(`<html>
                    <head><head>
                    <body>
                        <h1>Hello, ${user.name}!</h1>
                    </body>
                    </html>`)
            })
        } catch (error) {
            res.status(400).send(`<h1>${error.message}</h1>`)
        }
})
    
                
    


server.listen(8080, () => console.log('server started')) //un servidor es un proceso que se queda abierto, se lanza y se escucha en un puerto. ponemos un callback porque al ser asincrono sepamos cuando empieze a escuchar

/*
- tenemos una clousure que es con conexion segura
-la configuracion la dejamos escuchando en un puert
-le decimos de que forma y que direcciones/verbos hay
-las funciones son las acciones que se haran y validant para enviar un tipo de respuesta o otro
-portal que nos permite hacer llamadas y obtener respuestas
*/