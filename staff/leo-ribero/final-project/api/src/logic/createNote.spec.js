const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Spot } = require('../models')
const { NotFoundError } = require('errors')
const createSpot = require('./createSpot')
const { expect } = require('chai')

describe('createSpot', () => {
    before(() => connect('mongodb://localhost:27017/spots-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Spot.deleteMany()]))

    describe('when user already exists', () => {
        let user

        beforeEach(() => {
            user = new User({ name: 'Papa Gayo', username: 'papagayo', password: '123123123' })

            return user.save()
        })

        it('succeeds on correct user data', () =>
            createSpot(user.id, 'Hola Mundo')
                .then(spotId => {
                    expect(spotId).to.be.a('string')

                    return Spot.findById(spotId)
                })
                .then(spot => {
                    // expect(spot.user.toString()).to.equal(user._id.toString())
                    expect(spot.user.toString()).to.equal(user.id)
                    expect(spot.text).to.equal('Hola Mundo')
                    expect(spot.date).to.be.instanceOf(Date)
                })
        )

        it('fails on incorrect user id', () => {
            const wrongId = new ObjectId().toString()

            return createSpot(wrongId, 'Hello World')
                .then(() => {
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

            return createSpot(unexistingUserId, 'Hello World')
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