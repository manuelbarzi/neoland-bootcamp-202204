const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Event } = require('../models')
const { NotFoundError } = require('../errors')
const addEventToUser = require('./addEventToUser')
const { expect } = require('chai')
const { user } = require('../models/schemas')

describe('addEventToUser', () => {
  before(() => connect('mongodb://127.0.0.1:27017/notes-db-test'))

  beforeEach(() => Promise.all([User.deleteMany(), Event.deleteMany()]))

  describe('when user already exists', () => {
    let diegoUser

    beforeEach(() => {
      diegoUser = new User({ name: 'Diego Carvalho', email: 'diegocarve@gmail.com', password: '1234' })

      return Promise.all([diegoUser.save()])

    })
    describe('when event exists', () => {
      let event

      beforeEach(() => {
        event = new Event({ user: diegoUser.id, title: 'hello world', description: "test" })

        return event.save()
      })

      it('succeeds on correct data ', () => {
        return addEventToUser(event.id, diegoUser.id)
          .then(() => {
            return User.findById({ _id: diegoUser.id })
              .then(user => {
                const eventOnEventsArray = user.events.find(function (_event) {

                  return (_event._id.toString() === event.id)
                })

                expect(eventOnEventsArray.toString()).to.be.equal(event.id)

              })
          })
      })
    })

  })

  describe('addEventToUser', () => {
    let jordiUser

    beforeEach(() => {
      jordiUser = new User({ name: 'Jordi Shefer', email: 'jordishefer@gmail.com', password: '1234' })

      return jordiUser.save()

    })
    describe('when event exists', () => {
      let event

      beforeEach(() => {
        event = new Event({ user: jordiUser.id, title: 'Olá!', description: "test jordi" })

        return event.save()
      })

      it('succeeds on correct data', () => {
        return addEventToUser(event.id, jordiUser.id)
          .then(() => {
            return Event.findById({ _id: event.id })
              .then(event => {
                const participantOnParticipantsArray = event.participants.find(function (_user) {

                  return (_user._id.toString() === jordiUser.id)
                })

                expect(participantOnParticipantsArray.toString()).to.be.equal(jordiUser.id)

              })
          })
      })
    })
  })

  afterEach(() => User.deleteMany())

  after(() => disconnect())

})

