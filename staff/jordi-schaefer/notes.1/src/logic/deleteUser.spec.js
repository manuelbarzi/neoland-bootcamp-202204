const { readFile, readdir, writeFile } = require('fs')
const deleteUser = require('./deleteUser')
const { expect } = require('chai')
const { User } = require('../models')
const { createId, deleteFiles } = require('../utils')
const { NotFoundError } = require('../errors')



describe('deleteUser', () => {

    it ('succeeds on existing user', done => {
        
        deleteFiles('./db/users', error => {   // borro todos los usuarios
            if (error) return done(error)      // si no habian usuarios
                
            
            const user = new User('pepito', 'pepi_22', '123456789') // creo usuario nuevo
            const json = JSON.stringify(user, null ,4) // lo paso a json
            const userId = createId()

            writeFile(`./db/users/${userId}.json`, json, error => { // escribo el nuevo archivo de mi usuario
                if (error) return done(error)   // paro con el done i hay error escribiendo

                deleteUser(userId, (error)=> { 
                    expect(error).to.be.null 


                    readdir(`./db/users`, (error, files) => { // leo todos los archivos que tengo
                        if(error) return done(error)

                        expect(files.length).to.equal(0)
                        done()
                    })
                })
            })         
        })
    })




    it ('fails with no user', done => {
        
        deleteFiles('./db/users', error => {   // borro todos los usuarios
            if (error) return done(error)      // si no habian usuarios


            const user = new User('pepito', 'pepi_22', '123456789')
            const json = JSON.stringify(user, null ,4) 
            const userId = createId()

            writeFile(`./db/users/${userId}.json`, json, error => { 
                if (error) return done(error)  

                const newId = createId()
                deleteUser(newId, (error)=> { 
                    expect(error).to.not.be.null
                    expect(error.message).to.equal(`User with id ${newId} not found`)
                    expect(error).to.be.an.instanceOf(NotFoundError) 

                    readdir(`./db/users`, (error, files) => { // leo todos los archivos que tengo
                        if(error) return done(error)
                        
                        expect(files.length).to.equal(1)
                        
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
        })
    })


})
