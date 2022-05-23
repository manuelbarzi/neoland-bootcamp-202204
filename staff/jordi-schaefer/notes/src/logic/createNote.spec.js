
// mocha; parte de ejecutar los test
// chai; parte de comprobar, (expect, should assert....) expect es el mas extendido

const { readFile, writeFile } = require('fs')
const createNote = require('./createNote')
const { expect } = require('chai')
const { User } = require('../models')
const { createId, deleteFiles } = require('../utils')
const { NotFoundError } = require('../errors')



describe('createNote', () => {


    it ('succeeds with user and new note', done => {

        deleteFiles('./db/users', error => {   // borro todos los usuarios
            if (error) return done(error)

            deleteFiles('./db/notes', error => { // borro todas las notas
                if (error) return done(error)    // empiezo de cero

                const user = new User('Juan grande', 'Juan_22', '123123123') // creo un nuevo usuario
                const json = JSON.stringify(user)  // lo usare para guardar notas a su nombre
                const userId = createId()

                writeFile(`./db/users/${userId}.json`, json, error => { // añado el usuario
                    if (error) return done(error)

                    const text = 'nueva nota de test'
                    createNote( userId, text, (error, noteId) =>{
                        expect(error).to.be.null

                        readFile(`./db/notes/${noteId}.json`, 'utf8', (error, json) => { // lo leo
                            if(error) return done(new Error(`User with id ${userId} not found`))
                    
                            const note = JSON.parse(json)
                            expect(note).to.exist
                            expect(note).not.to.be.undefined
                            expect(note).to.be.an.instanceOf(Object)
                            expect(note.id).to.equal(noteId) 
                            expect(note.userId).to.equal(userId) 
                            expect(note.text).to.equal(text)  
                            note.date = new Date(note.date)
                            expect(note.date).to.be.instanceOf(Date)
                            
                            done()
                        })
                    })
                })
            })
        })


    })




    it ('fails with new note but user does not exist', done => {

        deleteFiles('./db/users', error => {   // borro todos los usuarios
            if (error) return done(error)

            deleteFiles('./db/notes', error => { // borro todas las notas
                if (error) return done(error)    // empiezo de cero

                const user = new User('Juan grande', 'Juan_22', '123123123') // creo un nuevo usuario
                const json = JSON.stringify(user)  // lo usare para guardar notas a su nombre
                const userId = createId()

                writeFile(`./db/users/${userId}.json`, json, error => { // añado el usuario
                    if (error) return done(error)

                    const newUserId = createId()
                    const text = 'nueva nota de test'
                    createNote( newUserId, text, (error, noteId) =>{
                        expect(error).to.not.be.null
                        expect(error.message).to.equal(`User with id ${newUserId} not found`) 
                        expect(error).to.be.an.instanceOf(NotFoundError) 
                        expect(noteId).to.be.undefined

                        done()
                    })
                })
            })
        })


    })



})