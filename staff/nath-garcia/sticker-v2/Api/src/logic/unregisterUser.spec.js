const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User } = require('../models')
const { } = require('../errors')
const unregisterUser = require('./unregisterUser')
const { expect } = require('chai')

describe('unregisterUser', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => User.deleteMany())

    describe('when user already exists', () => {
        let user

        beforeEach(() => {
            user = new User({ name: 'Mon Laferte', username: 'mon', password: '123456789' })

            return user.save()
        })

        it('succeeds on correct user data', () => {
            return unregisterUser(user.id, user.password)
                .then(result => {
                    expect(result).to.be.undefined

                    return User.findById(user.id)
                })
                .then((result) => {
                    expect(result).to.be.null //nul es igual a que este vacio. 
                })
        })

        /* it('fails on incorrect user id', () => {
             const wrongId = new ObjectId().toString()
 
             return unregisterUser(wrongId, 'Pepe Gayo', 26, 'pepe@gayo.com', '+34123123123')
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
 
             return unregisterUser(unexistingUserId, 'Pepe Gayo', 26, 'pepe@gayo.com', '+34123123123')
                 .then(result => {
                     throw new Error('should not reach this point')
                 })
                 .catch(error => {
                     expect(error).to.be.instanceOf(NotFoundError)
                     expect(error.message).to.equal(`user with id ${unexistingUserId} does not exist`)
                 })
         })
     })*/

        afterEach(() => User.deleteMany())

        after(() => disconnect())
    })
})