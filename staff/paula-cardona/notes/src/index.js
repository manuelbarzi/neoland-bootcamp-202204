const express = require('express')
const bodyParser = require('body-parser')
const { registerUser, authenticateUser } = require('./logic')
const { ConflictError, FormatError, AuthError } = require('./errors')
const { connect, disconnect } = require('mongoose')

//yo soy el server (notes)
connect('mongodb://localhost:27017/notes-db') //connecto con la base de datos
    .then (() => {//cuando tengo la confirmación de que estoy conectado a mongo
        console.log ('DB connected') //mandame mensaje DB connected

        const api = express () //ejecutando un funcion y guardando el resutlado en api. la funcion es una clousure. conjunto de funciones get post con serie de cofig que no se puede acceder desde fuera. forma segura. no pouedes acceder sin pasar por api i la serie de protecciones que tiene

        const jsonBodyParser = bodyParser.json() //objeto que analiza y comprueva el body de las solicitudes entrantes y lo pone en el body de la req

        //la api es notes
        api.post ('/api/users', jsonBodyParser, (req, res) => { //tengo un express escuchando sin parar si le llega un metodo post si lo recibe hace la callback
            try { //ponemos el try catch para las comprobaciones sincronas como que no se haya hecho bine la descomponetizacion siguiente o las validaciones dentro de la funcion registerUser
                const { body: {name, username, password } } = req //del body pido las propiedades del name, username i password
                
                registerUser(name, username, password) //hacemos el registerUser pasandole los parametros de name, username i password
                    .then(() => res.status(201).send()) //esperaremos a que se complete y si lo ha hecho correcto a través del .then enviaremos la respuesta de creado (201)
                    .catch (error => { //si el registro a fallado
                        let status = 500 //por defecto 500, error del servidor

                        if (error instanceof ConflictError) //si el error que da en el registerUser es el mismo que en nuestra logic RegisterUser
                            status= 409 //cambia el status a 409 que hace referencia a conflictError

                        res.status(status).json({error: error.message}) //devuelve en la res el status i en json el error i send
                        // res.status(status).send({JSON.stringify({error: error.message})
                        //por un lado lo que metemos por dentro lo transformamos en json i despues le hace send()

                    })         
            } catch (error) { //los errores de la lógica los manejamos por el middleware, es decir por este index
                let status = 500 //error del servidor no controlado

                //podriamos hacer otro tipo de validaciones sincronas como 502 con un if si sabemos que tenemos sobrecarga.

                if (error instanceof TypeError || error instanceof FormatError) //no es un error no controlado, sabemos que ha pasado. fallo del cliente
                    status = 400
                
                res.status(status).json({ error: error.message })

            }
        })

        api.post('/api/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { body: { username, password } } = req //como api te pido del body el username i la password

                authenticateUser(username, password)
                    .then(userId => res.status(200).json({ token : userId }))
                    .catch (error => {
                        let status = 500 

                        if (error instanceof AuthError)
                            status = 401

                        res.status(status).json({error : error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof FormatError)
                    status = 400

                res.status(status).json({ error: error.message })
            }
        })
            //retrieveUser
        api.post('/api/users/retrieveUser', jsonBodyParser, (req, res) => {
            try {
                const { body: { userId } } = req 

                retrieveUser(userId)
                    .then(user => res.status(200).json({ user }))
                    .catch (error => {
                        let status = 500 

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({error : error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof FormatError)
                    status = 400

                res.status(status).json({ error: error.message })
            }

            
        })

        //updateUser
        api.post('/api/users/updateUser', jsonBodyParser, (req, res) => {
            try {
                const { body: { userId, newName } } = req //los nombres tiene que coincidir con el navegador

                retrieveUser(userId, newName)
                    .then(() => res.status(204).send())
                    .catch (error => {
                        let status = 500 

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({error : error.message })
                    })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof FormatError)
                    status = 400

                res.status(status).json({ error: error.message })
            }

            
        })



        api.listen(8080, () => console.log('API running'))
    })

  