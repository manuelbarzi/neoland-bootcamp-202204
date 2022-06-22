const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Flat, Booking } = require('../models')
const { NotFoundError } = require('errors')
const deleteBookingFromFlat = require('./deleteBookingFromFlat')
const { expect } = require('chai')

describe.only('deleteBookingFromFlat', () => {
    before(() => connect('mongodb://localhost:27017/flats-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Flat.deleteMany()]))
    afterEach(() => Promise.all([User.deleteMany(), Flat.deleteMany()]))

    describe('when user already exists', () => {
        let user, user2

        beforeEach(() => {
            user = new User({ name: 'Papa Gayo', email: 'papa@gayo.com', password: '123123123' })
            user2 = new User({ name: 'Mama Chicho', email: 'mama@chicho.com', password: '123123123' })

            Promise.all(user.save(), user2.save())
        })
        afterEach(() => User.deleteMany())

        describe('When flat does not exist', () => {
            it('fails without flat', () => {
                const wrongId = new ObjectId().toString()

                return deleteBookingFromFlat(user.id, wrongId, wrongId)
                    .then(() => {
                        throw new Error('should not reach this point')
                    })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`flat with id ${wrongId} does not exist`)
                    })
            })
        })

        describe('When flat already exists', () => {
            let flat

            beforeEach(() => {
                flat = new Flat({
                    user: user.id,
                    title: 'This is a title',
                    description: 'this is a description',
                    address: 'this is an address',
                    images: ['image.jpg', 'image.png']
                })
                return flat.save()
            })
            afterEach(() => Flat.deleteMany())

            describe('When booking already exists', () => {
                let booking

                beforeEach(() => {
                    booking = new Booking({ user: user.id, name: 'Fulanito', phone: '+34654321987', email: 'fula@nito.com', text: 'esto es un texto', from: '01/07/2022', to: '10/07/2022' })
                    flat.bookings.push(booking)
                    
                    return flat.save()
                })

                it('succeeds on correct data', () => {

                    return deleteBookingFromFlat(user.id, flat.id, booking.id)
                        .then(result => {
                            expect(result).to.be.undefined

                            return Flat.findById(flat.id)
                                .then(flat => {
                                    const booking = flat.bookings.find(booking => booking._id.toString() === booking.id)

                                    expect(booking).to.be.undefined
                                })
                        })
                })
            })

            describe('When booking does not exist', () => {
                it('fails without booking', () => {
                    const wrongId = new ObjectId().toString()

                    return deleteBookingFromFlat(user.id, flat.id, wrongId)
                        .then(() => {
                            throw new Error('should not reach this point')
                        })
                        .catch(error => {
                            expect(error).to.be.instanceOf(NotFoundError)
                            expect(error.message).to.equal(`booking with id ${wrongId} does not exist`)
                        })
                })
            })
        })
    })

    after(() => disconnect())
})