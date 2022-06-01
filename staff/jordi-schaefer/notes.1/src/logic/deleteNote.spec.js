const { readFile, readdir, writeFile } = require('fs')
const deleteNote = require('./deleteNote')
const { expect } = require('chai')
const { User, Note } = require('../models')
const { createId, deleteFiles } = require('../utils')
const { NotFoundError } = require('../errors')



describe('deleteNote', () => {

    it ('succeeds on existing note', done => {
        
        deleteFiles('./db/users', error => {   // borro todos los usuarios
            if (error) return done(error)

            deleteFiles('./db/notes', error => { // borro todas las notas
                if (error) return done(error)    // empiezo de cero
                
                const user = new User('pepito', 'pepi_22', '123456789') // creo usuario nuevo
                const json = JSON.stringify(user, null ,4) // lo paso a json
                const userId = createId()

                writeFile(`./db/users/${userId}.json`, json, error => { // escribo el nuevo archivo de mi usuario
                    if (error) return done(error)   // paro con el done i hay error escribiendo

                    const text = 'Test note for deleteNote spec'
                    const noteId = createId()   
                    const note = new Note(noteId, userId, text)
                    const json = JSON.stringify(note, null, 4)

                    writeFile(`./db/notes/${noteId}.json`, json, error => {
                        if (error) return done(_error = error)
               
                        deleteNote(userId, noteId, (error)=> { 
                            expect(error).to.be.null 

                            readdir(`./db/notes`, (error, files) => { // leo todos los archivos que tengo
                                if(error) return done(error)

                                expect(files.length).to.equal(0)
                                done()
                            })
                        })
                    })    
                }) 
            })    
        })
    })




    it ('fails with invalid note Id', done => {
        
        deleteFiles('./db/users', error => {   // borro todos los usuarios
            if (error) return done(error)

            deleteFiles('./db/notes', error => { // borro todas las notas
                if (error) return done(error)    // empiezo de cero
                
                const user = new User('pepito', 'pepi_22', '123456789') // creo usuario nuevo
                const json = JSON.stringify(user, null ,4) // lo paso a json
                const userId = createId()

                writeFile(`./db/users/${userId}.json`, json, error => { // escribo el nuevo archivo de mi usuario
                    if (error) return done(error)   // paro con el done i hay error escribiendo

                    const text = 'Test note for deleteNote spec'
                    const noteId = createId()   
                    const note = new Note(noteId, userId, text)
                    const json = JSON.stringify(note, null, 4)

                    writeFile(`./db/notes/${noteId}.json`, json, error => {
                        if (error) return done(_error = error)
               
                        const newId = createId()
                        deleteNote(userId, newId, (error)=> { 
 
                            expect(error).to.not.be.null
                            expect(error.message).to.equal(`Note with id ${newId} not found`)
                            expect(error).to.be.an.instanceOf(NotFoundError) 

                            readdir(`./db/notes`, (error, files) => { // leo todos los archivos que tengo
                                if(error) return done(error)
                                
                                expect(files.length).to.equal(1)
                                
                                readFile(`./db/notes/${files[0]}`, 'utf8', (error, json) => {

                                    expect(error).to.be.null     
                                    expect(json).to.be.a('string')

                                    const note = JSON.parse(json)
                                    expect(note.id).to.equal(noteId) 
                                    expect(note.userId).to.equal(userId) 
                                    expect(note.text).to.equal(text)
                                    //expect(note.date).to.be.instanceOf(Date)      
                                    done()
                                })                 
                            })
                        })
                    })         
                })
            })
        })
    })



    it ('fails with invalid user Id', done => {
        
        deleteFiles('./db/users', error => {   // borro todos los usuarios
            if (error) return done(error)

            deleteFiles('./db/notes', error => { // borro todas las notas
                if (error) return done(error)    // empiezo de cero
                
                const user = new User('pepito', 'pepi_22', '123456789') // creo usuario nuevo
                const json = JSON.stringify(user, null ,4) // lo paso a json
                const userId = createId()

                writeFile(`./db/users/${userId}.json`, json, error => { // escribo el nuevo archivo de mi usuario
                    if (error) return done(error)   // paro con el done i hay error escribiendo

                    const text = 'Test note for deleteNote spec'
                    const noteId = createId()   
                    const note = new Note(noteId, userId, text)
                    const json = JSON.stringify(note, null, 4)

                    writeFile(`./db/notes/${noteId}.json`, json, error => {
                        if (error) return done(_error = error)
               
                        const newId = createId()
                        deleteNote(newId, noteId, (error)=> { 
 
                            expect(error).to.not.be.null
                            expect(error.message).to.equal(`User with id ${newId} not found`)
                            expect(error).to.be.an.instanceOf(NotFoundError) 

                            readdir(`./db/notes`, (error, files) => { // leo todos los archivos que tengo
                                if(error) return done(error)
                                
                                expect(files.length).to.equal(1)
                                
                                readFile(`./db/notes/${files[0]}`, 'utf8', (error, json) => {

                                    expect(error).to.be.null     
                                    expect(json).to.be.a('string')

                                    const note = JSON.parse(json)
                                    expect(note.id).to.equal(noteId) 
                                    expect(note.userId).to.equal(userId) 
                                    expect(note.text).to.equal(text)
                                    //expect(note.date).to.be.instanceOf(Date)      
                                    done()
                                })                 
                            })
                        })
                    })         
                })
            })
        })
    })


})
