const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { Flat, Booking } = require('../models')
const { NotFoundError } = require('errors')
const retrieveBookingFromFlat = require('./retrieveBookingFromFlat')
const { expect } = require('chai')

describe('retrieveBookingFromFlat', () => {
    before(() => connect('mongodb://localhost:27017/flats-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Flat.deleteMany()]))

    afterEach(() => Promise.all([User.deleteMany(), Flat.deleteMany()]))

    describe('when user already exists', () => {
        let user1, user2

        beforeEach(() => {
            user1 = new User({ name: 'Papa Gayo', email: 'papa@gayo.com', password: '123123123' })
            user2 = new User({ name: 'Mama Chicho', email: 'mama@chicho.com', password: '123123123' })

            Promise.all(user1.save(), user2.save())
        })
    })
})