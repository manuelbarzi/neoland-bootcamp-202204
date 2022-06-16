const { connect, disconnect } = require('mongoose')
const { User, Job } = require('../models')

const deleteJob = require('./deleteJob')
const { expect } = require('chai')
const { AuthError } = require('errors')


describe('Delet Work', () => {

    before(() => connect('mongodb://localhost:27017/test')) // conexion a la base de datos 
    
    beforeEach(() => {
        return Promise.all([User.deleteMany(), Job.deleteMany()])
            .then(() => {
                worker= new User({ name: 'Pringi', username: 'pringi', password: '123123123', role: 'worker', email:'asdfa@asd.vo' })
                usera = new User({ name: 'Miguel', username: 'Mingu', password: '123123123', role: 'admin', email:'aasdfa@asd.vo' })
                job = new Job({ title: 'titulo', addres: 'c/Esa' })
                return Promise.all([usera.save(), job.save(),worker.save()])
            })
    })

    it('succeeds on correct user', () => {
        return deleteJob(usera.id, job.id)
            .then(del => {
                expect(del.deletedCount).to.be.equal(1)
            })

    })

    it('Fail on user worker delete', () => {
        return deleteJob(worker.id, job.id)
            .then(del => {
                expect(del).to.instanceOf(AuthError)
            })

    })
    after(() => disconnect())
})