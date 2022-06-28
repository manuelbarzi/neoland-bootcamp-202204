const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Spot } = require('../models')
const { NotFoundError } = require('errors')
const updateSpot = require('./updateSpot')
const { expect } = require('chai')

describe('updateSpot', () => {
    before(() => connect('mongodb://localhost:27017/spots-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Spot.deleteMany()]))

    describe('when user already exists', () => {
        let user

        beforeEach(() => {
            user = new User({ name: 'Ele Fante', username: 'elefante', password: '123123123' })

            return user.save()
        })

        describe('when user already has spots', () => {
            let spot1, spot2, spot3, allSpots

            beforeEach(() => {
                spot1 = new Spot({ user: user.id, text: 'spot 1' })
                spot2 = new Spot({ user: user.id, text: 'spot 2' })
                spot3 = new Spot({ user: user.id, text: 'spot 3' })

                return Promise.all([spot1.save(), spot2.save(), spot3.save()])
                    .then(spots => allSpots = spots)
            })

            it('succeeds on correct user data', () =>
                updateSpot(user.id, spot2.id, 'new spot 2')
                    .then(result => {
                        expect(result).to.be.undefined

                        return Spot.findById(spot2.id)
                    })
                    .then(spot2 => expect(spot2.text).to.equal('new spot 2'))
            )
        })

        describe('when user has no spots', () => {
            it('succeeds on correct user data', () => {
                const unexistingSpotId = new ObjectId().toString()

                return updateSpot(user.id, unexistingSpotId, 'new spot 2')
                    .then(() => {
                        throw new Error('should not reach point')
                    })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`spot with id ${unexistingSpotId} does not exist`)
                    })
            })
        })

        it('fails on incorrect user id', () => {
            const wrongUserId = new ObjectId().toString()
            const unexistingSpotId = new ObjectId().toString()

            updateSpot(wrongUserId, unexistingSpotId, 'new spot 2')
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${wrongUserId} does not exist`)
                })
        })
    })

    describe('when user does not exist', () => {
        it('fails on unexisting user id', () => {
            const unexistingUserId = new ObjectId().toString()
            const unexistingSpotId = new ObjectId().toString()

            updateSpot(unexistingUserId, unexistingSpotId, 'new spot 2')
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