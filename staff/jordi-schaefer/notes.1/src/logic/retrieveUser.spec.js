const { readdir, unlink, writeFile } = require('fs')
const retrieveUser = require('./retrieveUser')
const { expect } = require('chai')
const { User } = require('../models')
const { createId } = require('../utils')
const { NotFoundError } = require('../errors')


describe('retrieveUser', () => {


    it ('succeeds on existing user', done => {
        
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
                
                retrieveUser(userId, (error, user)=> { // uso la funcion para buscar el usuario que acabo de añadir
                    expect(error).to.be.null // no espero encontrar errotes

                    expect(user).to.exist
                    expect(user).not.to.be.undefined
                    expect(user).to.be.an.instanceOf(Object)
                    expect(user.name).to.equal('pepito')  // y miro queel usuario tenga los datos del usuario que habia pedido
                    expect(user.username).to.equal('pepi_22')
                    expect(user.password).to.be.undefined

                    done()
                })
            })         
        }
    })




    it ('fails with no user', done => {
        
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

                const id_invent = 'id_inventing'
                retrieveUser(id_invent, (error, user)=> { // uso la funcion para buscar el usuario que acabo de añadir
                    expect(error).to.not.be.null
                    expect(error.message).to.equal(`User with id ${id_invent} not found`) 
                    expect(error).to.be.an.instanceOf(NotFoundError) 
                    expect(user).to.be.undefined

                    done()
                })
            })         
        }
    })


})