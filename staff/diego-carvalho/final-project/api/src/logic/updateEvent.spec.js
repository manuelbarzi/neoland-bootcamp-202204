const { connect, disconnect } = require('mongoose')
const { User, Event } = require('../models')
const updateEvent = require('./updateEvent')
const { expect } = require('chai')
const { NotFoundError } = require('../errors')
const { ObjectId } = require('bson')
const { event } = require('../models/schemas')

describe('updateEvent', () => {
    before(() => connect('mongodb://127.0.0.1:27017/events-db-test'))

    beforeEach(() => User.deleteMany())

    describe('when user exists', () => {
        let userId

        beforeEach(() => {
            return User.create({ name: 'Diego Carvalho', username: 'diegocarva', password: '1234' })
                .then(user => {
                    userId = user.id
                })
        })

        it('succeeds events and correct credentials', () => {
            let eventId

            return Event.create({ user: userId, title: 'After Work Mar Bella', description:'Únete a nosotros si quieres  disfrutar...' })
                .then((result) => {
                    eventId = result.id
             
                    return updateEvent(userId, eventId, 'After Work Mar Bella', 'Únete a nosotros si quieres  disfrutar...')
                })
                .then((result) => {
                    expect(result).to.be.undefined

                    return Event.findById(eventId)
                })
                .then((event) => {
                    expect(event.title).to.be.equal('After Work Mar Bella')
                })
        })

        it ('fails with no events', () => {
            const wrongId = new ObjectId().toString()

            return updateEvent(userId, wrongId, 'After Work Mar Bella', 'Únete a nosotros si quieres  disfrutar...')
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`event with id ${wrongId} does not exist`)
                })
        })
    })


    afterEach(() => User.deleteMany())
    after(() => disconnect())

})



