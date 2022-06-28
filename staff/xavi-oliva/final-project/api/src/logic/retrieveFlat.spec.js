const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Flat } = require('../models')
const { NotFoundError } = require('errors')
const retrieveFlat = require('./retrieveFlat')
const { expect } = require('chai')

describe('retrieveFlat', () => {
    before(() => connect('mongodb://localhost:27017/flats-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Flat.deleteMany()]))
    afterEach(() => Promise.all([User.deleteMany(), Flat.deleteMany()]))

    describe('when user already exists', () => {
        let user

        beforeEach(() => {
            user = new User({ name: 'Papa Gayo', email: 'papa@gayo.com', password: '123123123' })

            return user.save()
        })

        describe('when user already has flats', () => {
            let flat, flat2, flat3

            beforeEach(() => {
                flat = new Flat({ user: user.id, title: 'title', description: 'description', address: 'address', images: ['asd.png', 'qwer.jpg'] })
                flat2 = new Flat({ user: user.id, title: 'title2', description: 'description2', address: 'address2', images: ['asd2.png', 'qwer2.jpg'] })
                flat3 = new Flat({ user: user.id, title: 'title3', description: 'description3', address: 'address3', images: ['asd3.png', 'qwer3.jpg'] })

                return Promise.all([flat.save(), flat2.save(), flat3.save()])
            })

            it('succeeds on correct user data', () =>
                retrieveFlat(user.id, flat.id)
                    .then((flat) => {
                        expect(flat.title).to.be.equal('title')
                        expect(flat.description).to.be.equal('description')
                        expect(flat.address).to.be.equal('address')
                    })
            )

            it('fails on incorrect user id', () => {
                const wrongId = new ObjectId().toString()
                return retrieveFlat(wrongId, flat.id)
                    .then(() => {
                        throw new Error('should not reach this point')
                    })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`user with id ${wrongId} does not exist`)
                    })
            })

            it('fails on unexisting flat', () => {
                const unexistingFlatId = new ObjectId().toString()
    
                return retrieveFlat(user.id, unexistingFlatId)
                    .then(() => {throw Error('it should not reach this point')})
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`flat with id ${unexistingFlatId} does not exist`)
                    })
            })
        })
    })

    describe('when user does not exist', () => {
        it('fails on unexisting user id', () => {
            const unexistingUserId = new ObjectId().toString()
            const unexistingFlatId = new ObjectId().toString()

            return retrieveFlat(unexistingUserId, unexistingFlatId)
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