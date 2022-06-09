const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Event } = require('../models')
const { NotFoundError } = require('../errors')
const retrieveEvent = require('./retrieveEvent')
const { expect } = require('chai')

describe('retrieveEvent', () => {
    before(() => connect('mongodb://127.0.0.1:27017/events-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Event.deleteMany()]))

    describe('when user already exists', () => {
        let user

        beforeEach(() => {
            user = new User({ name: 'Papa Gayo', username: 'papagayo', password: '123123123' })

            return user.save()

            // return User.create({ name: 'Papa Gayo', username: 'papagayo', password: '123123123' })
        })
        // .then(_user => user = _user)

        describe('when user already has events', () => {
            let event1, event2, event3, allEvents

            beforeEach(() => {
                event1 = new Event({ user: user.id, title: 'event 1', description:'test event 1' })
                event2 = new Event({ user: user.id, title: 'event 2', description:'test event 2' })
                event3 = new Event({ user: user.id, title: 'event 3', description:'test event 3' })

                return Promise.all([event1.save(), event2.save(), event3.save()])
                    .then(events => allEvents = events)
            })

            it('succeeds on correct user data', () =>
                retrieveEvent(user.id)
                    .then(events => {
                        expect(events).to.be.instanceOf(Array)

                        expect(events).to.have.lengthOf(3)

                        events.forEach(event => {
                            const found = allEvents.some(_event => {
                                return _event.id === event.id && _event.title === event.title && event.description === event.description
                            })

                            expect(found).to.be.true
                        })
                    })
            )
        })

        describe('when user has no events', () => {
            it('succeeds on correct user data', () =>
                retrieveEvent(user.id)
                    .then(events => {
                        expect(events).to.be.instanceOf(Array)

                        expect(events).to.have.lengthOf(0)
                    })
            )
        })

        it('fails on incorrect user id', () => {
            const wrongId = new ObjectId().toString()

            return retrieveEvent(wrongId)
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

            return retrieveEvent(unexistingUserId)
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