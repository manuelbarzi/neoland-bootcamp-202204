const { expect } = require('chai')
const { connect, disconnect } = require('mongoose')
const { User, Clock, } = require('../models')
const ClocUserOut = require('./clockUserOut')
const { AuthError } = require('errors')

describe('ClocUserOut', () => {

    before(() => connect('mongodb://localhost:27017/test')) // conexion a la base de datos 
    let userWork
    beforeEach(() => {
        return Promise.all([User.deleteMany(), Clock.deleteMany()])
            .then(() => {
                data = new Date
                clockout = new Clock({ timein: data })
                userWork = new User({ name: 'Miguel', username: 'Mingu', password: '123123123', role: 'worker', DNI: '123123123s' })
                return Promise.all([userWork.save(), clockout.save()])

            })
    })

    it('sucees on Worker exist', () => {
        debugger
        return ClocUserOut(clockout.id, userWork.id)

            .then(registertimein => {
                expect(registertimein.matchedCount).to.be.equal(1)
                expect(registertimein).to.instanceOf(Object)
            })




    })

    it('error on Worker not  exist', () => {

        return ClocUserOut(clockout.id, '232123123123')

            .then(registertimein => {
                expect(registertimein.message).to.be.equals(`User not exist`)
                expect(registertimein).to.instanceOf(AuthError)
            })




    })
})