const { connect, disconnect } = require('mongoose')
const { User } = require('../models')
const { ConflictError } = require('../errors')
const registerUser = require('./registerUser')
const { expect } = require('chai')



describe('registerUser', () => {
    before(() => connect('mongodb://127.0.0.1:27017/notes-db-test'))

    beforeEach(() => User.deleteMany())
    afterEach(() => User.deleteMany())


    it('succeeds on correct credentials', () => {
        registerUser('Peter Pan', 'peterpan', '123123123')
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
            .then(() => registerUser('Wendy Pan', 'wendypan', '123123123'))
            .catch(error => {
                expect(error).to.be.instanceOf(ConflictError)
                expect(error.message).to.equal(`user with username wendypan already exists`)
            })
    })

    it('fails with wrong credentials', () => {
        try {
            registerUser('Wendy Pan', 3, '123123123')
        } catch (error) {
            debugger
            // testeamos los errores síncronos           
        }
    })

    after(() => disconnect())
})