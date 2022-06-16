const { expect } = require('chai')
const { connect, disconnect } = require('mongoose')
const { User, Clock } = require('../models')
const clockUserIn = require('./clockUserIn')
const { ConflictError } = require('errors')

describe('clockUserIn', () => {

    before(() => connect('mongodb://localhost:27017/test')) // conexion a la base de datos 
    let userWork
    beforeEach(() => {
        return Promise.all([User.deleteMany(), Clock.deleteMany()])
            .then(() => {
                userWork = new User({ name: 'Miguel', username: 'Mingu', password: '123123123', role: 'worker', DNI: '123123123s' })
                return userWork.save()
            })
            .then(userid => {
                newclock= new Clock ({user: userid, job: null})
                failclock= new Clock ({user: userid, job: userWork.id})
                return Promise.all ([newclock.save(),failclock.save()])
            })

    })

    it('sucess on Worker exist', () => {
        
        return clockUserIn(userWork.id)
            .then(id => {
                return Clock.findById(id)
            })
            .then(result => {
                expect(result.timein).to.instanceOf(Date)
                expect(result.user._id.toString()).to.be.equal(userWork.id)
            })
    })

   

    it('error on Worker not  exist', () => {

        return clockUserIn(newclock.id)
            .then(registertimein => {

                expect(registertimein.message).to.be.equals(`${newclock.id} not found`)
                expect(registertimein).to.instanceOf(ConflictError)
            })
    })

    it('error on Worker not  exist', () => {

        return clockUserIn(newclock.id)
            .then(registertimein => {

                expect(registertimein.message).to.be.equals(`${newclock.id} not found`)
                expect(registertimein).to.instanceOf(ConflictError)
            })
    })
    after(() => disconnect())
})