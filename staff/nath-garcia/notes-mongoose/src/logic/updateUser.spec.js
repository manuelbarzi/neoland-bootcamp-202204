const { connect, disconnect } = require('mongoose')
const { User } = require('../models')
const { ConflictError } = require('../errors')
const updateUser = require('./updateUser')
const { expect } = require('chai')

describe('updateUser', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => User.deleteMany())

    it('succeeds on name updated', () => {
        return createUser('Peppa Pig', 'oink', '010203')
            .then(result => {
                return updateUser(result.id, 'George')

            })
            .then(result => {
                expect(result).to.be.undefined

                return User.findOne({ username: 'oink' })
            })
            .then(user => {
                expect(user.name).to.equal('George Pig')
                expect(user.username).to.equal('oink')
                expect(user.password).to.equal('010203')

            })
    })

    afterEach(() => User.deleteMany())

    after(() => disconnect())
})