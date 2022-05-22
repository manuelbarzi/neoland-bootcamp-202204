
const { access, constants, readdir, readFile, unlink, writeFile } = require('fs')
const createUser = require('./createUser')
const { expect } = require('chai')
const { User } = require('../models')
const { ConflictError } = require('../errors')


describe('createUser', () => {


    it ('succeeds on new user and correct user data', done => {
        
        readdir(`./db/users`, (error, files) => {  // leo todas los usuarios que encuentro en la carpeta
            if(error) return done(error)           // si encuentro un error leyendo se lo paso al done

            let count = 0, _error                  // inicio contador de usuarios y nuevo error

            if(files.length) {                     // si tengo notas
                files.forEach(file => {                      // voy por cada una de los usuarios
                    unlink(`./db/users/${file}`, error => {  // elimino cada usuario
                        if(!_error) {                        // mientras  mi nuevo error no se declare, voy haciendo con cada usuario
                            
                            if (error) return done(_error = error)  // si me sale un error borrando el usuario, 
                                                                    // declaro mi nuevo error para parar las respuestas que van llegando a la vez que paso error al done
                            count ++                                // sumo contador

                            if (count == files.length) {  // cuando he terminado de eliminar todos (me lo dice el contador)
                               churro()                   // ejecuto todo el churro de abajo
                            }
                        }
                    })
                })
            } else {      // si no habian usuarios
                churro()  // ejecuto todo el churro de abajo
            }
        })


        // funcion churro
        function churro() {                                                  // con lo usuarios ya borrados
            createUser('John Doe', 'john', '123456789', (error, userId) => { // ejecuto la funcion de crear usuario con los datos que quiera
                                    
                expect(error).to.be.null           // no espero error
                expect(userId).to.be.a('string')   // espero un userId que sera string
    
                const file = `./db/users/${userId}.json` // con el id cojo el archivo del supuesto usuario creado
                
                access(file, constants.F_OK, (error) => {  // accedo al archivo del usuario creado
                    
                    expect(error).to.be.null          // no espero encontrar error accediendo al archivo
    
                    // DENTRO DE LA CALLBACK, asi me aseguro que ya he accedido al archivo
                    // si lo pongo mas abajo(fuera callback), intentare leer el archvio seguramente antes de haber accedido a el, por lo que saltara error
                    readFile(file, 'utf8', (error, json) => { // leo el archivo del usuario
                        
                        expect(error).to.be.null      // no espero encontrar error al leer
                        expect(json).to.be.a('string')// lo que leo espero que sea un churro string (algo definido)
    
                        const user = JSON.parse(json) // lo convierto a JS para acceder a sus propiedades
                        expect(user.name).to.equal('John Doe') // compruebo que los datos sean los mismos que he pasado al crear el usuario
                        expect(user.username).to.equal('john')
                        expect(user.password).to.equal('123456789')
    
                        done() // cuando se ejecuta esta callback lo damos por terminado
                        // de este modo confirmamos a la funcion 'it' que ya he recivido todas las respuestas qu esperaba de lecturas y demas
                        // y no hay error, puede continuar, es una callback vacia = callback(null)
                    })
                })
            })
        }
    })



    it('fails on user already registered', done => {

        // igual que arriba, si hay usuarios los limpio para quen o me de problemas, y ejecuto el churro
        readdir(`./db/users`, (error, files) => {
            if(error) return done(error)

            let count = 0, _error

            if(files.length) {
                files.forEach(file => {
                    unlink(`./db/users/${file}`, error => {  
                        if(!_error) {
                            
                            if (error) return done(_error = error) 
                            
                            count ++

                            if (count == files.length) {                        
                                churro() 
                            }
                        }
                    })
                })
            } else {     
                churro() 
            }
        })


        function churro() {

            const user = new User('pepito', 'pepi_22', '123456789') // creo usuario nuevo
            const json = JSON.stringify(user, null ,4)              // lo paso a json
            const userId = 'id_creada_a_manita'                     // puedo crear la id tambien con la funcion

            writeFile(`./db/users/${userId}.json`, json, error => {  // escribo el nuevo archivo de mi usuario
                if (error) return done(error)                        // si me sale error escribiendo se lo paso al done
            
                createUser('pepito', 'pepi_22', '123456789', (error, userId) => {  // uso la funcion para intentar crear otro usuario con los mismos datos
                    expect(error).to.not.be.null                                      // espero que devuelva error
                    expect(error.message).to.equal('username pepi_22 already exists') // espero que el error tenga esta mensaje
                    expect(error).to.be.an.instanceOf(ConflictError)                  // de tipo conflict
                    expect(userId).to.be.undefined                                    // como pasa error no me habra devuelto nada por userId
        
                    done() // callback done vacia para indicar que he terminado
                })
            })
            
        }
    })



})
