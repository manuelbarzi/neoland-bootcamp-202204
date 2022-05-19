const { access, constants, readdir, readFile, unlink } = require('fs')
const createUser = require('./createUser')
const { expect } = require('chai')

describe('createUser', () => {
    it('succeeds on new user and correct user data', done => {

        readdir(`../../db/users`, (error, files) => {
            if (error) return done(error)

            let count = 0, _error

            if (files.length) {

                files.forEach(file => {
                    
                    unlink(`./db/users/${file}`, error => {
                        
                        if (!_error) {
                            if (error) return done(_error = error)

                            count++

                            if (count == files.length) {
                                createUser('Miguel Angel', 'miguel', 'miguel123', (error, userId) => {
                                    
                                    expect(error).to.be.null

                                    expect(userId).to.be.a('string')

                                    const file = `../../db/users${userId}.json`

                                    access(file, constants.F_OK, error => {
                                        expect(error).to.be.null

                                        readFile(file, 'utf8', (error, json) => {
                                            expect(error).to.be.null

                                            expect(json).to.be.a('string')

                                            const user = JSON.parse(json)
                                            expect(user.name).to.equal('Miguel Angel')
                                            expect(user.username).to.equal('miguel')
                                            expect(user.password).to.equal('miguel123')

                                            done()
                                        })
                                    })
                                })
                            }
                        }
                    })
                })
            } else {
                createUser('Miguel Angel', 'miguel', 'miguel123', (error, userId) => {
                    
                    expect(error).to.be.null

                    expect(userId).to.be.a('string')

                    const file = `../../db/users${userId}.json`

                    access(file, constants.F_OK, error => {
                        expect(error).to.be.null

                        readFile(file, 'utf8', (error, json) => {
                            expect(error).to.be.null

                            expect(json).to.be.a('string')

                            const user = JSON.parse(json)
                            expect(user.name).to.equal('Miguel Angel')
                            expect(user.username).to.equal('miguel')
                            expect(user.password).to.equal('miguel123')

                            done()
                        })
                    })
                })
            }
        })
    }),

    it('fails when user already exists', () => {
        readdir(`../../db/users`, (error, files) => {
            if (error) return done(error)

            if(files.length){
                files.forEach(file => {
                    const userExist = `../../db/users${userId}.json`
                    
                    if(userExist === userId) {
                        access(file, constants.F_OK, error => {
                            expect(error).to.be.null

                            expect(json).to.be.a('string')

                            const user = JSON.parse(json)
                            expect(user.name).to.equal(userExist)
                            expect(user.username).to.equal(userExist)
                            expect(user.password).to.equal(userExist)

                            done()
                        })
                    }
                })
            }
        })
    })
})