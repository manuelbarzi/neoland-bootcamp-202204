const { deleteFiles } = require("../utils")
const { User } = require('../models')
const { createId } = require('../utils')
const { writeFile } = require('fs')
const { expect } = require("chai")
const retrieveUser = require('./retrieveUser')
const { NotFoundError } = require("../errors")


describe('retrieveUser', () => {
    it('succeed when user exists', done => {
        deleteFiles(error => {
            if (error) done(error)

            const user = JSON.stringify(new User('John Doe', 'johndoe', '123123123'))
            const userId = createId()

            writeFile(`./db/users/${userId}.json`, user, error => {
                if (error) done(error)

                retrieveUser(userId, (error, user) => {
                    expect(error).to.be.null

                    expect(user).not.to.be.undefined
                    expect(user).to.be.an.instanceOf(Object)
                    expect(user.name).to.equal('John Doe')
                    expect(user.username).to.equal('johndoe')
                    expect(user.password).to.be.undefined

                    done()
                })
            })
        })
    })
    it('fails when user does not exists', done => {
        deleteFiles(error => {
            if (error) done(error)

            userId = createId()

            retrieveUser(userId, (error, data) => {
                expect(error).not.to.be.null
                expect(error.message).to.equal('user does not exist')
                expect(error).to.be.an.instanceOf(NotFoundError)

                expect(data).to.be.undefined

                done()
            })
        })
    })
})