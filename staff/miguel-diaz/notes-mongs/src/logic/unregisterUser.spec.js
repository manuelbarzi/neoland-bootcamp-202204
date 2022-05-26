const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User } = require('../models')
const { NotFoundError} = require('../errors')
const unregisterUser = require('./unregisterUser')
const { expect } = require('chai')
const retrieveUser = require('./retrieveUser')

describe('unregisterUser', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => User.deleteMany())

    describe('when user already exists', () => {
        let user

        beforeEach(() => {
            user = new User({ name: 'Papa Gayo', username: 'papagayo', password: '123123123' })

            return user.save()
        })

        it('succeeds on correct user id', () =>
            retrieveUser(user.id)
                .then(user => {
                    expect(user.constructor).to.equal(Object)
                    expect(user.name).to.equal('Papa Gayo')
                    expect(user.username).to.equal('papagayo')
                    expect(user.password).to.be.undefined
                    expect(user.id).to.be.undefined
                })
        )

        it('should delete the new user', () =>
            unregisterUser(user.id)
                .then(result => {
                    expect(result).to.be.undefined

                    return User.findOne({id:result})
                })
                .then(find => {
                    expect(find).to.be.null
                })
            
        )       
    })

    describe('when user id does not exist and try to delete', () => {
        it('cant delete an inexsting user', () => {
            const unexistingUserId = new ObjectId().toString()

            unregisterUser(unexistingUserId)
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${unexistingUserId} does not exist`)
                })
        })
    })

    afterEach(() => User.deleteMany())

    after(() => disconnect())
})