const { access, constants, readdir, readFile, unlink, fstat, writeFile } = require('fs')
const createUser = require('./createUser')
const { expect } = require('chai')
const { ConflictError } = require('../errors')

describe('createUser', () => {
    it('succeeds on new user and correct user data', done => {

        readdir(`./db/users`, (error, files) => {
            if (error) return done(error)

            let count = 0, _error

            if (files.length) {

                files.forEach(file => {

                    unlink(`./db/users/${file}`, error => {

                        if (!_error) {
                            if (error) return done(_error = error)

                            count++

                            if (count == files.length) {
                                createUser('John Doe', 'johndoe', '123123123', (error, userId) => {

                                    expect(error).to.be.null

                                    expect(userId).to.be.a('string')

                                    const file = `./db/users/${userId}.json`

                                    access(file, constants.F_OK, error => {
                                        expect(error).to.be.null

                                        readFile(file, 'utf8', (error, json) => {
                                            expect(error).to.be.null

                                            expect(json).to.be.a('string')

                                            const user = JSON.parse(json)
                                            expect(user.name).to.equal('John Doe')
                                            expect(user.username).to.equal('johndoe')
                                            expect(user.password).to.equal('123123123')

                                            done()
                                        })
                                    })
                                })
                            }
                        }
                    })
                })
            } else {
                createUser('John Doe', 'johndoe', '123123123', (error, userId) => {

                    expect(error).to.be.null

                    expect(userId).to.be.a('string')

                    const file = `./db/users/${userId}.json`

                    access(file, constants.F_OK, error => {
                        expect(error).to.be.null

                        readFile(file, 'utf8', (error, json) => {
                            expect(error).to.be.null

                            expect(json).to.be.a('string')

                            const user = JSON.parse(json)
                            expect(user.name).to.equal('John Doe')
                            expect(user.username).to.equal('johndoe')
                            expect(user.password).to.equal('123123123')

                            done()
                        })
                    })
                })
            }
        })
    }),

        it('fails when the user already exists', done => {
            debugger
            readdir(`./db/users`, (error, files) => {
                if (error) return done(error)

                if (files.length) {

                    let count = 0, _error

                    files.forEach(file => {
                        unlink(`./db/users/${file}`, error => {
                            if (!_error) {
                                if (error) return done(_error = error)

                                count++
                                if (count === files.length) {
                                    const json = JSON.stringify({ name: "John Doe", username: "johndoe", password: "123123123" })

                                    writeFile('./db/users/123456789.json', json, error => {
                                        if (error) return done(error)

                                        createUser('John D', 'johndoe', '123123153', (error, id) => {
                                            expect(error).to.not.be.null
                                            expect(error.message).to.equal('username johndoe already exists')
                                            expect(error).to.be.an.instanceOf(ConflictError)
    
                                            expect(id).to.be.undefined
                                    })
                                    })
                                }
                            }
                        })
                    })
                } else {
                    writeFile('./db/users/123456789.json', json, error => {
                        if (error) return done(error)

                        createUser('John D', 'johndoe', '123123153', (error, id) => {
                            expect(error).to.not.be.null
                            expect(error.message).to.equal('username johndoe already exists')
                            expect(error).to.be.an.instanceOf(ConflictError)

                            expect(id).to.be.undefined

                            done()
                        })
                    })
                }
            })
        })
})