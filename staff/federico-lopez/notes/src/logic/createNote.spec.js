const { createNote } = require('.')
const { deleteFiles } = require("../utils")
const { expect } = require('chai')
const { User } = require('../models')
const { createId } = require("../utils")
const { writeFile, readFile, access } = require("fs")
const { NotFoundError, FormatError } = require('../errors')

describe('createNote', () => {
    it('succeed on existing user and not empty text', done => {
        debugger
        deleteFiles('./db/notes', error => {
            if (error) done(error)

            deleteFiles('./db/users', error => {
                if (error) document(error)

                const user = new User('John Doe', 'johndoe', '123123123')
                userId = createId()
                user.id = userId

                const json = JSON.stringify(user)

                writeFile(`./db/users/${userId}.json`, json, error => {
                    if (error) return done(error)

                    createNote(userId, 'yo soy la nota', (error, noteId) => {
                        expect(error).to.be.null

                        expect(noteId).to.be.a('string')

                        readFile(`./db/notes/${noteId}`, 'utf8', (error, file) => {
                            expect(error).to.be.null

                            const _note = JSON.parse(file)

                            expect(_note.text).to.equal('yo soy la nota')

                            done()
                        })
                    })
                })
            })
        })
    })
    it('fails on unexisting user and correct text', done => {
        deleteFiles('./db/notes', error => {
            if (error) done(error)

            deleteFiles('./db/users', error => {
                if (error) done(error)

                const userId = '15efewef4564f684e'

                createNote(userId, 'yo soy la nota', (error, noteId) => {
                    expect(error).not.to.be.null
                    expect(error).to.be.an.instanceOf(NotFoundError)
                    expect(error.message).to.equal('user does not exist')

                    expect(noteId).to.be.undefined

                    done()
                })
            })
        })
    })
    it('fails on existing user, but blank text', done => {
        deleteFiles('./db/notes', error => {
            if (error) done(error)

            deleteFiles('./db/users', error => {
                if (error) document(error)

                const user = new User('John Doe', 'johndoe', '123123123')
                userId = createId()
                user.id = userId

                const json = JSON.stringify(user)

                writeFile(`./db/users/${userId}.json`, json, error => {
                    if (error) return done(error)

                    try {
                        createNote(userId, '    ', (error, noteId) => {
                            done()
                        })
                    } catch (error) {
                        expect(error).to.be.an.instanceOf(FormatError)
                        expect(error.message).to.equal('note text is blank')

                        done()
                    }
                })
            })
        })
    })
})