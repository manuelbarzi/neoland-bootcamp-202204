const { readdir, unlink, writeFile } = require('fs')
const authenticateUser = require('./authenticateUser')
const { expect } = require('chai')
const { User } = require('../models')
const { createId } = require('../utils')
const { AuthError } = require('../errors')


describe('authenticateUser', () => {


    it ('succeeds on existing user', done => {
        debugger
        readdir(`./db/users`, (error, files) => { // leo todos los archivos que tengo
            if(error) return done(error)

            let count = 0, _error

            if(files.length) {
                files.forEach(file => {
                    unlink(`./db/users/${file}`, error => {  // voy eliminando los archivos de usuarios para limpiar
                        if(!_error) {
                            
                            if (error) return done(_error = error) 
                            
                            count ++

                            if (count == files.length) { // cuando he terminado de eliminar todos
                            churro() // ejecuto todo el churro
                            }
                        }
                    })
                })
            } else {      // si no habian usuarios
                churro()  // ejecuto todo el churro
            }
        })



        function churro() {
            const user = new User('pepito', 'pepi_22', '123456789') // creo usuario nuevo
            const json = JSON.stringify(user, null ,4) // lo paso a json
            const userId = createId()

            writeFile(`./db/users/${userId}.json`, json, error => { // escribo el nuevo archivo de mi usuario
                if (error) return done(error)   // paro con el done i hay error escribiendo
                
                const username = 'pepi_22'
                const password = '123456789'
                authenticateUser(username, password, (error, id)=> { // uso la funcion para buscar el usuario que acabo de añadir
                    expect(error).to.be.null // no espero encontrar errotes
                    expect(id).to.be.a('string')
                    expect(id).to.equal(userId)
                    
                    done()
                })
            })         
        }
        
    })

    it ('On ivalid password', done => {
        debugger
        readdir(`./db/users`, (error, files) => { // leo todos los archivos que tengo
            if(error) return done(error)

            let count = 0, _error

            if(files.length) {
                files.forEach(file => {
                    unlink(`./db/users/${file}`, error => {  // voy eliminando los archivos de usuarios para limpiar
                        if(!_error) {
                            
                            if (error) return done(_error = error) 
                            
                            count ++

                            if (count == files.length) { // cuando he terminado de eliminar todos
                            churro() // ejecuto todo el churro
                            }
                        }
                    })
                })
            } else {      // si no habian usuarios
                churro()  // ejecuto todo el churro
            }
        })



        function churro() {
            const user = new User('pepito', 'pepi_22', '123456789') // creo usuario nuevo
            const json = JSON.stringify(user, null ,4) // lo paso a json
            const userId = createId()

            writeFile(`./db/users/${userId}.json`, json, error => { // escribo el nuevo archivo de mi usuario
                if (error) return done(error)   // paro con el done i hay error escribiendo
                
                const username = 'pepi_22'
                const password = '1234567890'
                authenticateUser(username, password, (error, id)=> { // uso la funcion para buscar el usuario que acabo de añadir
                    expect(error).to.be.an.instanceOf(AuthError) 
                    expect(error.message).to.equal('wrong credentials')// no espero encontrar errotes
                    expect(username).to.be.a('string')
                    expect(username).to.equal('pepi_22')
                    expect(password).to.be.a('string')
                   
                    
                    
                    done()
                })
            })         
        }
        
    })

})