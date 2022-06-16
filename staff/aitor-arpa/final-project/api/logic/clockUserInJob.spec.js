const { expect } = require('chai')
const { connect, disconnect } = require('mongoose')
const { User, Job, Clock, } = require('../models')
const clockUserinJob = require('./clockUserInJob')
const { AuthError, ConflictError } = require('errors')
const { job } = require('../models/schemas')




describe('clockUserinJob', () => {

    before(() => connect('mongodb://localhost:27017/test')) // conexion a la base de datos 
    let userWork
    beforeEach(() => {
        return Promise.all([User.deleteMany(), Job.deleteMany(),Clock.deleteMany()])
            .then(() => {
                userWork = new User({ name: 'Miguel', username: 'Mingu', password: '123123123', role: 'worker', DNI: '123123123s' })
                return userWork.save()
            })
            .then(user => {
                newJob = new Job({ title: "new Job", description: "hazlo tu ", address: " c/Escopeta", workers: user.id })
                return newJob.save()
            })
    })

    it('sucess on Worker exist', () => {
        
        return clockUserinJob(userWork.id, newJob.id)
            .then(id => {
                return Clock.findById(id)
            })
            .then(result => {
                expect(result.timein).to.instanceOf(Date)
                expect(result.job.toString()).to.be.equal(newJob.id.toString())
                expect(result.user._id.toString()).to.be.equal(userWork.id)
            })
    })



    it('error on Worker not  exist', () => {

        return clockUserinJob(newJob.id, newJob.id)
            .then(registertimein => {

                expect(registertimein.message).to.be.equals(`${newJob.id} not found`)
                expect(registertimein).to.instanceOf(ConflictError)
            })
    })
    after(() => disconnect())
})