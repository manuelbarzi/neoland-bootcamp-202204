const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Flat } = require('../models')
const { NotFoundError } = require('errors')
const addBookingToFlat = require('./addBookingToFlat')
const { expect } = require('chai')

describe('addBookingToFlat', () => {
    before(() => connect('mongodb://localhost:27017/flats-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Flat.deleteMany()]))

    describe('when user already exists', () => {
        let user1, user2

        beforeEach(() => {
            user1 = new User({ name: 'Papa Gayo', email: 'papa@gayo.com', password: '123123123' })
            user2 = new User({ name: 'Mama Chicho', email: 'mama@chicho.com', password: '123123123' })

            Promise.all(user1.save(), user2.save())
        })

        describe('When flat already exists', () => {
            let flat

            beforeEach(() => {
                flat = new Flat({
                    user: user1.id,
                    title: 'This is a title',
                    description: 'this is a description',
                    address: 'this is an address',
                    images: ['image.jpg', 'image.png']
                })
                return flat.save()
            })

            it('succeeds on correct data credentials', () => {
                return addBookingToFlat(user1.id, flat.id, 'Fulanito', '+34654321987', 'fula@nito.com', 'esto es un texto', '01/07/2022', '10/07/2022')
                    .then(bookingId => {
                        expect(bookingId).to.be.a('string')

                        return Flat.findById(flat.id)
                            .then(flat => {
                                const booking = flat.bookings.find(booking => booking._id.toString() === bookingId)

                                expect(booking.user.toString()).to.be.equal(user1.id)
                                expect(booking.flat.toString()).to.be.equal(flat.id)
                                expect(booking.name).to.be.equal('Fulanito')
                                expect(booking.phone).to.be.equal('+34654321987')
                                expect(booking.email).to.be.equal('fula@nito.com')
                                expect(booking.text).to.be.equal('esto es un texto')
                                expect(booking.from).to.be.equal('01/07/2022')
                                expect(booking.to).to.be.equal('10/07/2022')
                                expect(booking.date).to.be.instanceOf(Date)
                            })
                    })
            })

            it('fails on incorrect user credentials', () => {
                const wrongId = new ObjectId().toString()

                return addBookingToFlat(wrongId, flat.id, 'Fulanito', '+34654321987', 'fula@nito.com', 'esto es un texto', '01/07/2022', '10/07/2022')
                    .then(result => {
                        throw new Error('should not reach this point')
                    })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`user with id ${wrongId} does not exist`)
                    })
            })

            it('fails on correct user but incorrect flat credentials', () => {
                const wrongId = new ObjectId().toString()

                return addBookingToFlat(user1.id, wrongId, 'Fulanito', '+34654321987', 'fula@nito.com', 'esto es un texto', '01/07/2022', '10/07/2022')
                    .then(result => {
                        throw new Error('should not reach this point')
                    })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`flat with id ${wrongId} does not exist`)
                    })
            })
        })

        describe('When flat does not exists', () => {
            it('fails on unexisting flat id', () => {
                const unexistingFlatId = new ObjectId().toString()

                return addBookingToFlat(user1.id, unexistingFlatId, 'Fulanito', '+34654321987', 'fula@nito.com', 'esto es un texto', '01/07/2022', '10/07/2022')
                    .then(result => {
                        throw new Error('should not reach this point')
                    })
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
    
            return addBookingToFlat(unexistingUserId, unexistingFlatId, 'Fulanito', '+34654321987', 'fula@nito.com', 'esto es un texto', '01/07/2022', '10/07/2022')
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
