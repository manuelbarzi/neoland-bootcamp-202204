const { expect } = require('chai')
const { connect, disconnect } = require('mongoose')
const { User } = require('../models')
const updateUser = require('./updateUser')


describe('updateUser', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => User.deleteMany())

    it('succeed on existing user', () => {
        debugger
        return User.create({ name: 'carlangas', username: 'carlangas', password: '21347985' })
            .then(userCreated => {
                return updateUser('otroid', { name: 'carlos' })
            })
            .then(() => {
                return User.findOne({ username: 'carlangas' })
            })
            .then(userFound => {
                expect(userFound.username).to.equal('carlangas')
                expect(userFound.name).to.equal('carlos')
                expect(userFound.password).to.equal('21347985')
            })
    })

    after(() => disconnect())
})