const { readdir, writeFile } = require('fs')
const deleteNote = require('./deleteNote')
const { expect } = require('chai')
const { User } = require('../models')
const { Note } = require('../models')
const { createId, deleteFiles } = require('../utils')
const { NotFoundError } = require('../errors')



describe('deleteNote', () => {

    it('succeeds on existing user', done => {

        deleteFiles('./db/users', error => {
            if (error) return done(error)

            deleteFiles('./db/users', error => {
                if (error) return done(error)

                const userId = createId()
                const user = new User('pepito', 'pepi_22', '1234567890') // creo usuario nuevo
                const json = JSON.stringify(user)

                writeFile(`./db/users/${userId}.json`, json, error => {
                    if (error) return done(error)

                    const noteId = createId()
                    const note = new Note(`${noteId}`, `${userId}`, 'Nota Beta')
                    const json = JSON.stringify(note, null, 4) // lo paso a json


                    writeFile(`./db/notes/${noteId}.json`, json, error => {
                        if (error) return done(error)

                        deleteNote(`${noteId}`,`${userId}`,  (error) => {
                            expect(error).to.be.null

                            readdir(`./db/notes`, (error, files) => { // leo todos los archivos que tengo
                                if (error) return done(error)

                                expect(files.length).to.equal(0)
                                done()
                            })
                        })
                    })


                })
            })
        })
    })


    it('the note does not exist', done => {

        deleteFiles('./db/users', error => {
            if (error) return done(error)

            deleteFiles('./db/users', error => {
                if (error) return done(error)

                const userId = createId()
                const user = new User('pepito', 'pepi_22', '1234567890') // creo usuario nuevo
                const json = JSON.stringify(user)

                writeFile(`./db/users/${userId}.json`, json, error => {
                    if (error) return done(error)

                    deleteNote(`3242refsfa`,`${userId}`, (error) => {
                        expect(error).to.equal('Note not exist')
                        expect(error).to.be.an.instanOF(NotFoundError)

                        expect(files.length).to.equal(0)
                        done()
                    })
                })
            })


        })
    })
})




