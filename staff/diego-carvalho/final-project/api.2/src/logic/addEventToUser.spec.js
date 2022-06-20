const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Event } = require('../models')
const { NotFoundError } = require('../errors')
const addEventToUser = require('./addEventToUser')
const { expect } = require('chai')

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
      debugger
      it('succeeds on correct data ', () => {
        return addEventToUser(event.id, diegoUser.id)
          .then(() => {
            return User.findById({ _id: diegoUser.id })
              .then(user => {

                const eventOnArrayEvents = user.events.find(function (_event) {
                  debugger
                  return (_event._id.toString() === event.id)
                })

                expect(eventOnArrayEvents.toString()).to.be.equal(event.id)

              })
          })

      })
    })

  })


  afterEach(() => User.deleteMany())

  after(() => disconnect())
})