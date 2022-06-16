const { expect } = require('chai')
const { connect, disconnect } = require('mongoose')
const { User, Clock, } = require('../models')
const clocUserOut = require('./clockUserOut')
const { AuthError, NotFoundError } = require('errors')

describe('clocUserOut', () => {

    before(() => connect('mongodb://localhost:27017/test')) // conexion a la base de datos 
    let userWork
    beforeEach(() => {
        return Promise.all([User.deleteMany(), Clock.deleteMany()])
            .then(() => {
                data = new Date
                invalid = new Clock({ timein: data })
                userWork = new User({ name: 'Miguel', username: 'Mingu', password: '123123123', role: 'worker', DNI: '123123123s' })
                return Promise.all([userWork.save(), invalid.save()])

            })
            .then(([user, clock]) => {
                clockgood = new Clock({ user: user, timein: new Date })
                return Promise.all([clockgood.save(), clock])

            })
    })

    it('sucees on Worker exist', () => {
      
        return clocUserOut(userWork.id, clockgood.id)

            .then(timeout => {
                expect(timeout.matchedCount).to.be.equal(1)
                expect(timeout).to.instanceOf(Object)
            })

    })

    it('error on Worker not  exist', () => {

        return clocUserOut(invalid.id,clockgood.id)

            .then(timeout => {
                expect(timeout).to.instanceOf(NotFoundError)
                expect(timeout.message).to.be.equal(`${invalid.id} not found`)
            })




    })
    after(() => disconnect())
})