const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User } = require('../models')
const { NotFoundError } = require('errors')
const updateUser = require('./updateUser')
const { expect } = require('chai')

describe('updateUser', () => {
    before(() => connect('mongodb://localhost:27017/flats-db-test'))

    beforeEach(() => User.deleteMany())
    afterEach(() => User.deleteMany())

    describe('when user already exists', () => {
        let user 
        
        beforeEach(() => {
            user = new User({ name: 'Pepe', email: 'jordi@email.com', password: '123123123' })
            return user.save()
        })

        it('succeeds on existing user', () => {
            return updateUser(user.id, 'Diego', 'Surnames', '+34123123123')
                .then(result => {
                    expect(result).to.be.undefined
                    return User.findById(user.id)
                })
                .then(user => {
                    expect(user.name).to.equal('Diego')
                    expect(user.surnames).to.equal('Surnames')
                    expect(user.phone).to.equal('+34123123123')
                })
        })

        it('fails on incorrect user id', () => {
            const wrongId = new ObjectId().toString()

            return updateUser(wrongId, 'Diego', 'Surnames', '+34123123123')
                .then(result => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${wrongId} does not exist`)
                })
        })
    })

    describe('when user does not exist', () => {
        it('fails on unexisting user id', () => {
            const unexistingUserId = new ObjectId().toString()

            return updateUser(unexistingUserId, 'Diego', 'Surnames', '+34123123123')
                .then(result => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${unexistingUserId} does not exist`)
                })
        })
    })

    after(() => disconnect())

})
