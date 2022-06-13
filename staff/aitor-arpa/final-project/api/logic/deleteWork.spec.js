const { connect, disconnect, isValidObjectId } = require('mongoose')
const { User, Job } = require('../models')

const deleteWork = require('./deleteWork')
const { expect } = require('chai')


describe('Delet Work', () => {
    debugger
    let usera
    let job

    before(() => connect('mongodb://localhost:27017/test')) // conexion a la base de datos 

    beforeEach(() => {
        User.deleteMany()
        usera = new User({ name: 'Miguel', username: 'Mingu', password: '123123123', role: 'admin' })
        job = new Job({ title: 'titulo', addres: 'c/Esa' })
        Promise.all(usera.save(), Job.save())
    })
    it('succeeds on correct user'), () => {
        deleteWork(usera.id, job.id)
            .then(del => {
                expect(del).to.be.null
            })

    }
    after(() => disconnect())
})