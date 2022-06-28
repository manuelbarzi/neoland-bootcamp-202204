const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Spot } = require('../models')
const { NotFoundError } = require('errors')
const retrieveSpots = require('./retrieveSpots')
const { expect } = require('chai')

describe('retrieveSpots', () => {
    before(() => connect('mongodb://localhost:27017/spots-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Spot.deleteMany()]))

    describe('when user already exists', () => {
        let user

        beforeEach(() => {
            user = new User({ name: 'Papa Gayo', username: 'papagayo', password: '123123123' })

            return user.save()

            // return User.create({ name: 'Papa Gayo', username: 'papagayo', password: '123123123' })
        })
        // .then(_user => user = _user)

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
                retrieveSpots(user.id)
                    .then(spots => {
                        expect(spots).to.be.instanceOf(Array)

                        expect(spots).to.have.lengthOf(3)

                        spots.forEach(spot => {
                            const found = allSpots.some(_spot => {
                                return _spot.id === spot.id && _spot.text === spot.text
                            })

                            expect(found).to.be.true
                        })
                    })
            )
        })

        describe('when user has no spots', () => {
            it('succeeds on correct user data', () =>
                retrieveSpots(user.id)
                    .then(spots => {
                        expect(spots).to.be.instanceOf(Array)

                        expect(spots).to.have.lengthOf(0)
                    })
            )
        })

        it('fails on incorrect user id', () => {
            const wrongId = new ObjectId().toString()

            return retrieveSpots(wrongId)
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

            return retrieveSpots(unexistingUserId)
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