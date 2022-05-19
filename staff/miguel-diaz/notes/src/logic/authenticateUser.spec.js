const { expect } = require('chai')
const { writeFile } = require('fs')
const authenticateUser = require('./authenticateUser')
const { clearDbUsers } = require('../utils')

describe('authenticateUser', () => {
    it('succeed when user and password are corrects', done => {
        clearDbUsers(error => {
            if (error) return done(error)

            const json = JSON.stringify({ name: 'Miguel Angel', username: 'miguel', password: 'miguel123' })

            writeFile('./db/users/123456789', json, error => {
                if (error) return done(error)

                authenticateUser('miguel', 'miguel123', (error, token) => {
                    debugger
                    expect(error).to.be.null
                    expect(token).not.to.be.undefined
                    expect(token).to.be.a('string')

                    done()
                })
            })
        })
    })
}), it('fails when user does not exists', () => {

})