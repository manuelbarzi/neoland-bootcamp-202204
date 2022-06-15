const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Flat } = require('../models')
const { NotFoundError } = require('errors')
const createFlat = require('./createFlat')
const { expect } = require('chai')

describe('createFlat', () => {
    before(() => connect('mongodb://localhost:27017/flats-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Flat.deleteMany()]))
    
    describe('when user already exists', () => {
        let user

        beforeEach(() => {
            user = new User({ name: 'Papa Gayo', email: 'papa@gayo.com', password: '123123123' })

            return user.save()
        })

        it('succeeds on correct user data', () =>
            createFlat(user.id, 'This is a title', 'this is a description', 'this is an address')
                .then(flatId => {
                    expect(flatId).to.be.a('string')

                    return Flat.findById(flatId)
                })
                .then(flat => {
                    // expect(note.user.toString()).to.equal(user._id.toString())
                    expect(flat.user.toString()).to.equal(user.id)
                    expect(flat.title).to.equal('This is a title')
                    expect(flat.description).to.equal('this is a description')
                    expect(flat.address).to.equal('this is an address')
                })
        ) 

        it('fails on incorrect user id', () => {
            const wrongId = new ObjectId().toString()

            return createFlat(wrongId, 'This is a title', 'this is a description', 'this is an address')
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

            return createFlat(unexistingUserId, 'This is a title', 'this is a description', 'this is an address')
                .then(result => {
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