const { connect, disconnect } = require('mongoose')
const { User,Job } = require('../models')
const addWork = require('./addWork')
const { expect } = require('chai')


describe('Add Work', () => {
    debugger
    let useradmin

    before(() => connect('mongodb://localhost:27017/test')) // conexion a la base de datos 

    beforeEach(() => {
        return Promise.all([User.deleteMany(),Job.deleteMany()])
            .then(() => {
                useradmin = new User({ name: 'Miguel', username: 'Mingu', password: '123123123', role: 'admin', DNI: '123123123s' })
                return useradmin.save()
            })
    })
    it('succeeds on correct user', () => { 
       return addWork(useradmin.id, 'TotKilain', 'Reparacion de Puerta', 'C/ escopeta Nº Pum')
            .then(newwork => {
                
                expect(newwork.title).to.be.equal('TotKilain')
                expect(newwork.description).to.be.equal('Reparacion de Puerta')
                expect(newwork.address).to.be.equal('C/ escopeta Nº Pum')
                
            })

    })
    after(() => disconnect())
})