const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Flat } = require('../models')
const { ConflictError, NotFoundError } = require('errors')
const updateFlat = require('./updateFlat')
const { expect } = require('chai')

describe('updateFlat', () => {
    before(() => connect('mongodb://localhost:27017/flats-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Flat.deleteMany()]))

    describe('when user already exists', () => {
        let user, flat

        beforeEach(() => {
            user = new User({ name: 'Papa Gayo', email: 'papa@gayo.com', password: '123123123' })

            return user.save()
                .then(() => {
                    flat = Flat({ user: user.id, title: 'title', description: 'description', address: 'address' })

                    return flat.save()
                })
        })

        it('succeeds on correct user data and existing flat', () =>
            updateFlat(user.id, flat.id, 'another title', 'another description', 'another address')
                .then(result => {
                    expect(result).to.be.undefined

                    return Flat.findById(flat.id)
                })
                .then(flat => {
                    expect(flat.user.toString()).to.equal(user.id)
                    expect(flat.title).to.equal('another title')
                    expect(flat.description).to.equal('another description')
                    expect(flat.address).to.equal('another address')
                })
        )

        it('fails on incorrect user id', () => {
            const wrongId = new ObjectId().toString()
            return updateFlat(wrongId, flat.id, 'another title', 'another description', 'another address')
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(ConflictError)
                    expect(error.message).to.equal(`flat with id ${flat.id} does not belong to user with id ${wrongId}`)
                })
        })

        it('fails on unexisting flat', () => {
            const unexistingFlatId = new ObjectId().toString()

            return updateFlat(user.id, unexistingFlatId, 'another title', 'another description', 'another address')
                .then(() => {throw Error('it should not reach this point')})
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`flat with id ${unexistingFlatId} does not exist`)
                })
        })

        it('succeeds on existing flat, existing user, without update changes', () => {
            updateFlat(user.id, flat.id, 'title', 'description', 'address')
            .then(result => {
                expect(result).to.be.undefined

                return Flat.findById(flat.id)
            })
            .then(flat => {
                expect(flat.user.toString()).to.equal(user.id)
                expect(flat.title).to.equal('title')
                expect(flat.description).to.equal('description')
                expect(flat.address).to.equal('address')
            })
        })
    })
    afterEach(() => User.deleteMany())

    after(() => disconnect())
})