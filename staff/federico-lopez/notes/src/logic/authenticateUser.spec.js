const { expect } = require('chai')
const { writeFile } = require('fs')
const authenticateUser = require('./authenticateUser')
const { deleteFiles } = require('../utils')
const { AuthError } = require('../errors')
const { User } = require('../models')
const { createId } = require('../utils')

describe('authenticateUser', () => {
    it('succeed when user and password are corrects', done => {
        deleteFiles(error => {
            if (error) return done(error)

            const user = new User('John Doe', 'johndoe', '123123123')
            
            _userId = createId()

            user.id = _userId

            const json = JSON.stringify(user)

            writeFile(`./db/users/${file}.json`, json, error => {
                if (error) return done(error)
                authenticateUser('johndoe', '123123123', (error, userId) => {

                    expect(error).to.be.null
                    expect(userId).not.to.be.undefined
                    expect(userId).to.be.a(_userId)

                    done()
                })
            })
        })
    }), it('fails when the user does not exists', done => {
        deleteFiles(error => {
            if (error) return done(error)

            authenticateUser('johndoe', '123123123', (error, userId) => {

                expect(error).not.to.be.null
                expect(error.message).to.equal('wrong credentials')
                expect(error).to.be.an.instanceOf(AuthError)

                expect(userId).to.be.undefined


                done()
            })
        })
    })
    
    it('fails when the user exists, but password is incorrect', done => {
        deleteFiles(error => {
            if (error) return done(error)

            const json = JSON.stringify({ name: 'John Doe', username: 'johndoe', password: '123123123' })

            writeFile('./db/users/123456789', json, error => {
                if (error) return done(error)
                
                authenticateUser('johndoe', '19731973', (error, token) => {

                    expect(error).not.to.be.null
                    expect(error.message).to.equal('wrong credentials')
                    expect(error).to.be.an.instanceOf(AuthError)

                    expect(token).to.be.undefined


                    done()
                })
            })
        })
    })
})