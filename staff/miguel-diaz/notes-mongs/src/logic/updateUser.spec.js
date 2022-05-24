const { connect, disconnect} = require('mongoose')
const {User} = require('../models')
const updateUser = require('./updateUser')
const {expect} = require('chai')

describe('createUser', () => {
    debugger
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => User.deleteMany())

    it('should update the user credentials', () => {
        return User.create({name: 'Steve Jobs', username: 'stevejobs', password: '123123123'})
            .then(result => {return updateUser(result._id, 'Bill Gates') })
            .then(result2 => {
                expect(result2).to.be.undefined

                return User.findOne({ username: 'stevejobs' })
            })
            .then(user => {
                expect(user.name).to.equal('Bill Gates')
                expect(user.username).to.equal('stevejobs')
                expect(user.password).to.equal('123123123')
            })
    })

    // afterEach(() => User.deleteMany)

    after(() => disconnect())
})