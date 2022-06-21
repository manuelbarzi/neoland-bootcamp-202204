const { expect } = require('chai')
const { connect, disconnect } = require('mongoose')
const { User, Job, Clock, } = require('../models')
const  clockUserJobOut = require('./clockUserJobOut')
const { AuthError, NotFoundError } = require('errors')


describe('clockUserJobOut', () => {

    before(() => connect('mongodb://localhost:27017/test')) // conexion a la base de datos 
    let userId
    let jobId
    beforeEach(() => {
        return Promise.all([User.deleteMany(), Job.deleteMany(), Clock.deleteMany()])
            .then(() => {
                userWork = new User({ name: 'Miguel', username: 'Mingu', password: '123123123', role: 'worker', DNI: '123123123s' })
                return userWork.save()
            })
            .then(_userId => {
                userId = _userId.id
                newJob = new Job({ title: "new Job", description: "hazlo tu ", address: " c/Escopeta", workers: _userId })
                return newJob.save()
            })
            .then(_jobid => {
                jobId = _jobid.id
                clockid = new Clock({ user: userWork, job: _jobid, })
                return clockid.save()

            })
    })

    it('sucess on Worker exist', () => {
        
        return clockUserJobOut(userId, jobId, clockid.id)
            .then(result => {
                expect(result.modifiedCount).to.be.equal(1)
                expect(result.matchedCount).to.be.equal(1)
                return Clock.findById(clockid.id)
            })
            .then(verify=>{
                expect(verify.timein).to.instanceOf(Date)
                expect(verify.job.toString()).to.be.equal(newJob.id.toString())
                expect(verify.user._id.toString()).to.be.equal(userWork.id)
                expect(verify.timeout).to.instanceOf(Date)
                
            })
    })

    it('error on Worker not  exist', () => {
        
        return clockUserJobOut(jobId, jobId, clockid.id)
            .then(result => {

                expect(result.message).to.be.equals(`user with id ${jobId} does not exist`)
                expect(result).to.instanceOf(NotFoundError)
            })
    })
    after(() => disconnect())
})