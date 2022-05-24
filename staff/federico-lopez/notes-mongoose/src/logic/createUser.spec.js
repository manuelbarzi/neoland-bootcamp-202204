const { connect, disconnect } = require('mongoose')
const { User } = require('../models')
const { ConflictError } = require('../errors')
const createUser = require('./createUser')
const { expect } = require('chai')

describe('createUser', () => {
    before(() => connect('mongodb://127.0.0.1:27017/notes-db-test'))

    beforeEach(() => User.deleteMany())

    it('succeeds on correct credentials', () => {
        debugger
        return createUser('Peter Pan', 'peterpan', '123123123')
            .then(result => {
                expect(result).to.be.undefined

                return User.findOne({ username: 'peterpan' })
            })
            .then(user => {
                expect(user.name).to.equal('Peter Pan')
                expect(user.username).to.equal('peterpan')
                expect(user.password).to.equal('123123123')
            })
    })

    it('fails when user already exists', () => {
        return User.create({ name: 'Wendy Pan', username: 'wendypan', password: '123123123'})
            .then(() => createUser('Wendy Pan', 'wendypan', '123123123'))
            .catch(error => {
                expect(error).to.be.instanceOf(ConflictError)
                expect(error.message).to.equal(`user with username wendypan already exists`)
            })
    })

    it('fails when username is not a string', () => {
        try {
            createUser({ user: 'carlitos', username: true, password: '123123123'})
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(TypeError)
            expect(error.message).to.equal('name is not a string')
        }
    })

    afterEach(() => User.deleteMany())

    after(() => disconnect())
})