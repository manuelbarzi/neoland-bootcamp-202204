const { readFile, readdir, unlink, writeFile } = require('fs')
const deleteUser = require('./deleteUser')
const { expect } = require('chai')
const { User } = require('../models')
const { createId } = require('../utils')
const { NotFoundError } = require('../errors')


describe('deleteUser', () => {


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

                deleteUser(userId, (error)=> { 
                    expect(error).to.equal('User Delete')


                    readdir(`./db/users`, (error, files) => { // leo todos los archivos que tengo
                        if(error) return done(error)

                        expect(files.length).to.equal(0)
                        done()
                    })
                })
            })         
        }
    })




    it ('fails with no user', done => {
        
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
            const user = new User('pepito', 'pepi_22', '123456789')
            const json = JSON.stringify(user, null ,4) 
            const userId = createId()

            writeFile(`./db/users/${userId}.json`, json, error => { 
                if (error) return done(error)  

                const newId = createId()
                deleteUser(newId, (error)=> { 
                    expect(error).to.not.be.null
                    expect(error.message).to.equal(`User not exist`)
                    expect(error).to.be.an.instanceOf(NotFoundError) 

                    readdir(`./db/users`, (error, files) => { // leo todos los archivos que tengo
                        if(error) return done(error)
                        
                        expect(files.length).to.equal(1)
                        
            
                        // se que solo habra un usuario, miro que no lo ha modificado
                        // accedo y lo leo
 //                       access(`./db/users/${files[0]}`, constants.F_OK, error => {  
 //                           expect(error).to.be.null
                            
                            readFile(`./db/users/${files[0]}`, 'utf8', (error, json) => {

                                expect(error).to.be.null     
                                expect(json).to.be.a('string')

                                const user = JSON.parse(json)
                                expect(user.name).to.equal('pepito') 
                                expect(user.username).to.equal('pepi_22')
                                expect(user.password).to.equal('123456789')          
                                done()
                            })                 
                        
                    })
                })
            })         
        }
    })


})