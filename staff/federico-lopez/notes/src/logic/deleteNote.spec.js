const { expect } = require("chai")
const { deleteFiles, createId } = require("../utils")
const { writeFile, access } = require('fs')
const { User, Note } = require('../models')
const { deleteNote } = require('./')
const { ConflictError, NotFoundError } = require("../errors")

describe('deleteNote', () => {
    it('succeed on existing user and existing note', done => {
        deleteFiles('./db/notes', error => {
            if (error) return done(error)

            deleteFiles('./db/users', error => {
                if (error) return done(error)

                const user = new User('Maria Doe', 'mariadoe', '123123123')

                const json = JSON.stringify(user)

                const userId = createId()

                writeFile(`./db/users/${userId}.json`, json, error => {
                    if (error) return done(error)

                    const note = new Note(undefined, userId, 'yo soy la nota')

                    const json = JSON.stringify(note)

                    writeFile(`./db/notes/${note.id}.json`, json, error => {
                        if (error) return done(_error = error)

                        deleteNote(userId, note.id, error => {
                            expect(error).to.be.null

                            access(`./db/notes/${note.id}.json`, error => {
                                expect(error).to.exist

                                done()
                            })
                        })
                    })
                })
            })
        })
    })
    it('fails when note does not belong to the user', done => {
        deleteFiles('./db/notes', error => {
            if (error) return done(error)

            deleteFiles('./db/users', error => {
                if (error) return done(error)

                const user = new User('Maria Doe', 'mariadoe', '123123123')

                const json = JSON.stringify(user)

                const userId = createId()

                writeFile(`./db/users/${userId}.json`, json, error => {
                    if (error) return done(error)

                    const user2 = new User('John Doe', 'jhondoe', '123123123')

                    const json2 = JSON.stringify(user2)

                    const userId2 = createId()

                    writeFile(`./db/users/${userId2}.json`, json2, error => {
                        if (error) return done(error)

                        const note = new Note(undefined, userId2, 'yo soy la nota de John')

                        const json = JSON.stringify(note)

                        writeFile(`./db/notes/${note.id}.json`, json, error => {
                            if (error) return done(error)

                            deleteNote(userId, note.id, error => {
                                expect(error).not.to.be.null
                                expect(error).to.be.an.instanceOf(ConflictError)
                                expect(error.message).to.equal('note does not belong to the current user')

                                access(`./db/notes/${note.id}.json`, error => {
                                    expect(error).not.to.exist

                                    done()
                                })
                            })
                        })
                    })
                })
            })
        })
    })
    it('fails when note does not exist', done => {
        deleteFiles('./db/notes', error => {
            if (error) return done(error)

            deleteFiles('./db/users', error => {
                if (error) return done(error)

                const user = new User('Maria Doe', 'mariadoe', '123123123')

                const json = JSON.stringify(user)

                const userId = createId()

                writeFile(`./db/users/${userId}.json`, json, error => {
                    if (error) return done(error)

                    deleteNote(userId, noteId = createId(), error => {
                        expect(error).to.exist
                        expect(error).to.be.an.instanceOf(NotFoundError)
                        expect(error.message).to.equal('note does not exist')

                        done()
                    })
                })
            })
        })      
    })
})