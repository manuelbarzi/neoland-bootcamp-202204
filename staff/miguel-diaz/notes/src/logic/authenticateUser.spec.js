const { access, constants, readdir, readFile, unlink, writeFile } = require('fs')
const authenticateUser = require('./authenticateUser')
const { expect } = require('chai')
const { User } = require('../models')
const { createId } = require('../utils')

describe('authenticateUser', () => {
    it('succeeds on new user and correct user data', done => {
        readdir(`./db/users`, (error, files) => {
            if (error) return done(error)

            let count = 0, _error

            if (files.length)
                files.forEach(file => {
                    unlink(`./db/users/${file}`, error => {
                        if (!_error) {
                            if (error) return done(_error = error)

                            count++

                            if (count == files.length) {
                                const user = new User('Maria Doe', 'mariadoe', '123123123')

                                const json = JSON.stringify(user)

                                const _userId = createId()

                                writeFile(`./db/users/${_userId}.json`, json, error => {
                                    if (error) return done(error)

                                    authenticateUser('mariadoe', '123123123', (error, userId) => {
                                        expect(error).to.be.null

                                        expect(userId).to.be.a('string')
                                        expect(userId).to.equal(_userId)

                                        done()
                                    })
                                })
                            }
                        }
                    })
                })
            else {
                const user = new User('Maria Doe', 'mariadoe', '123123123')

                const json = JSON.stringify(user)

                const _userId = createId()

                writeFile(`./db/users/${_userId}.json`, json, error => {
                    if (error) return done(error)

                    authenticateUser('mariadoe', '123123123', (error, userId) => {
                        expect(error).to.be.null

                        expect(userId).to.be.a('string')
                        expect(userId).to.equal(_userId)

                        done()
                    })
                })
            }

        })
    })

    // TODO unhappy test cases
})