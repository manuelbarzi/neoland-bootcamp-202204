const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Event } = require('../models')
const { NotFoundError } = require('../errors')
const retrieveEvent = require('./retrieveEvent')
const { expect } = require('chai')

describe('retrieveEvent', () => {
    before(() => connect('mongodb://127.0.0.1:27017/events-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Event.deleteMany()]))

    describe('when owner already exists', () => {
        let owner

        beforeEach(() => {
            owner = new User({ name: 'Papa Gayo', email: 'papagayo@gmail.com', password: '1234' })

            return owner.save()
        })

        describe('when owner already has events', () => {
            let event1, event2, event3, allEvents

            beforeEach(() => {
                event1 = new Event({ owner: owner.id, photo:'https://d3ipks40p8ekbx.cloudfront.net/dam/Barcelona_Platja-Barceloneta.jpg.' , title: 'event 1', description: 'test event 1', direction:'https://goo.gl/maps/F1C37Q3zqd9CeVNv6', category:'sport-activities'})
                event2 = new Event({ owner: owner.id, photo:'https://thumbs.dreamstime.com/b/playa-y-mar-18378306.jpg' ,title: 'event 2', description: 'test event 2', direction:'https://goo.gl/maps/arTzFmK6cUaY5Dbg8', category:'social-activities' })
                event3 = new Event({ owner: owner.id, photo:'https://c8.alamy.com/zoomses/9/db86c48f0d014fa4a5a9dccf7dde7011/fkwpbe.jpg', title: 'event 3', description: 'test event 3', direction:'https://goo.gl/maps/oWMrhDq7pqcrHmwM6', category:'environment'})

                return Promise.all([event1.save(), event2.save(), event3.save()])
                    .then(events => allEvents = events)
            })

            it('succeeds on correct owner data', () =>
                retrieveEvent(owner.id)
                    .then(events => {
                        expect(events).to.be.instanceOf(Array)

                        expect(events).to.have.lengthOf(3)

                        events.forEach(event => {
                            const found = allEvents.some(_event => {
                                return _event.id === event.id && _event.photo === event.photo && _event.title === event.title && event.description === event.description && _event.direction === event.direction && _event.category === event.category
                            })

                            expect(found).to.be.true
                        })
                    })
            )
        })

        describe('when owner has no events', () => {
            it('succeeds on correct user data', () =>
                retrieveEvent(owner.id)
                    .then(events => {
                        expect(events).to.be.instanceOf(Array)

                        expect(events).to.have.lengthOf(0)
                    })
            )
        })

        it('fails on incorrect owner id', () => {
            const wrongId = new ObjectId().toString()

            return retrieveEvent(wrongId)
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`owner with id ${wrongId} does not exist`)
                })
        })
    })

    describe('when owner does not exist', () => {
        it('fails on unexisting user id', () => {
            const unexistingUserId = new ObjectId().toString()

            return retrieveEvent(unexistingUserId)
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`owner with id ${unexistingUserId} does not exist`)
                })
        })
    })

    afterEach(() => User.deleteMany())

    after(() => disconnect())
})