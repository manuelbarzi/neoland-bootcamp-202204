
// mocha; parte de ejecutar los test
// chai; parte de comprobar, (expect, should assert....) expect es el mas extendido

const { readFile, writeFile } = require('fs')
const saveNote = require('./saveNote')
const { expect } = require('chai')
const { User, Note } = require('../models')
const { createId, deleteFiles } = require('../utils')
const { NotFoundError } = require('../errors')



describe('safeNote', () => {


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
                    saveNote(userId, null, text, (error, noteId) =>{
                        expect(error).to.be.null

                        readFile(`./db/notes/${noteId}.json`, 'utf8', (error, json) => { // lo leo
                            //if(error) return done(new Error(`User with id ${userId} not found`))
                            expect(error).to.be.null

                            expect(json).to.be.a('string')
                            const note = JSON.parse(json)
                            expect(note).to.exist
                            expect(note).not.to.be.undefined
                            expect(note).to.be.an.instanceOf(Object)
                            expect(note.id).to.equal(noteId) 
                            expect(note.userId).to.equal(userId) 
                            expect(note.text).to.equal(text)  
                            const date = new Date(note.date)
                            expect(date.toString()).not.to.equal('Invalid Date')
                            
                            done()
                        })
                    })
                })
            })
        })
    })



    it ('succeeds with user and note (to be edited)', done => {

        deleteFiles('./db/users', error => {   // borro todos los usuarios
            if (error) return done(error)

            deleteFiles('./db/notes', error => { // borro todas las notas
                if (error) return done(error)    // empiezo de cero

                const user = new User('Juan grande', 'Juan_22', '123123123') // creo un nuevo usuario
                const json = JSON.stringify(user)  // lo usare para guardar notas a su nombre
                const userId = createId()

                writeFile(`./db/users/${userId}.json`, json, error => { // añado el usuario
                    if (error) return done(error)

                    const text = 'Test note for saveNote spec'
                    const noteId = createId()   
                    const note = new Note(noteId, userId, text)
                    const json = JSON.stringify(note, null, 4)

                    writeFile(`./db/notes/${noteId}.json`, json, error => {
                        if (error) return done(_error = error)

                        const newText = 'nueva nota de test'
                        saveNote( userId, noteId, newText, (error, noteId) =>{
                            expect(error).to.be.null

                            readFile(`./db/notes/${noteId}.json`, 'utf8', (error, json) => { // lo leo
                                //if(error) return done(new Error(`User with id ${userId} not found`))
                                expect(error).to.be.null

                                expect(json).to.be.a('string')
                                const note = JSON.parse(json)
                                expect(note).to.exist
                                expect(note).not.to.be.undefined
                                expect(note).to.be.an.instanceOf(Object)
                                expect(note.id).to.equal(noteId) 
                                expect(note.userId).to.equal(userId) 
                                expect(note.text).to.equal(newText) 
                                const date = new Date(note.date)
                                expect(date.toString()).not.to.equal('Invalid Date')
                                
                                done()
                            })
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
                    saveNote( newUserId, null, text, (error, noteId) =>{
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



    it ('fails with user but note does not exist', done => {

        deleteFiles('./db/users', error => {   // borro todos los usuarios
            if (error) return done(error)

            deleteFiles('./db/notes', error => { // borro todas las notas
                if (error) return done(error)    // empiezo de cero

                const user = new User('Juan grande', 'Juan_22', '123123123') // creo un nuevo usuario
                const json = JSON.stringify(user)  // lo usare para guardar notas a su nombre
                const userId = createId()

                writeFile(`./db/users/${userId}.json`, json, error => { // añado el usuario
                    if (error) return done(error)

                    const newNoteId = createId()
                    const text = 'nueva nota de test'

                    saveNote( userId, newNoteId, text, (error, noteId) =>{
                        expect(error).to.not.be.null
                        expect(error.message).to.equal(`Note with id ${newNoteId} not found`) 
                        expect(error).to.be.an.instanceOf(NotFoundError) 
                        expect(noteId).to.be.undefined

                        done()
                    })
                })
            })
        })


    })



})