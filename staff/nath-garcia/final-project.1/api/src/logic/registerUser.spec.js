const { connect, disconnect } = require('mongoose')
const { User } = require('../models')
const { ConflictError } = require('../errors')
const registerUser = require('./registerUser')
const { expect } = require('chai')

describe('registerUser', () => {
    before(() => connect('mongodb://localhost:27017/final-pro-test'))

    beforeEach(() => User.deleteMany())

    it('succeeds on correct credentials', () => {
        return registerUser('Peppa', 'Pig', 'lapeppa', 'lapeppa@gmail.com', '643643643', '01020300')
            .then(result => {
                expect(result).to.be.undefined

                return User.findOne({ username: 'lapeppa' })
            })
            .then(user => {
                expect(user.name).to.equal('Peppa')
                expect(user.surname).to.equal('Pig')
                expect(user.username).to.equal('lapeppa')
                expect(user.email).to.equal('lapeppa@gmail.com')
                expect(user.phone).to.equal('643643643')
                expect(user.password).to.equal('01020300')
            })
    })

    it('fails when user already exists', () => {
        return User.create({ name: 'George', surname: 'Pig', username: 'elgeorge', email: 'elgeorge@email.com', phone: '643643643', password: '01020300' })
            .then(() => registerUser('George', 'Pig', 'elgeorge', 'elgeorge@email.com', '643643643', '01020300'))
            .catch(error => {
                expect(error).to.be.instanceOf(ConflictError)
                expect(error.message).to.equal(`user with username elgeorge already exists`)
            })
    })

    afterEach(() => User.deleteMany())

    after(() => disconnect())
})