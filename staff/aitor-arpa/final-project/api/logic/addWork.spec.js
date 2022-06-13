const { connect, disconnect, isValidObjectId } = require('mongoose')
const { User } = require('../models')

const addWork = require('./addWork')
const { expect } = require('chai')


describe('Add Work', () => {
    debugger
    let usera

    before(() => connect('mongodb://localhost:27017/test')) // conexion a la base de datos 

    beforeEach(() => {
        User.deleteMany()
        usera = new User({ name: 'Miguel', username: 'Mingu', password: '123123123', role: 'admin', DNI: '123123123s' })
        return usera.save()
    })
    it('succeeds on correct user'), () => {
        addWork(usera.id, 'TotKilain', 'Reparacion de Puerta', 'C/ escoperta Nº Pum')
            .then(newwork => {
                expect(isValidObjectId(wwork.id)).to.be.true
                expect(newwork.title).to.be.equal('Totkilain')
                expect(newwork.description).to.be.equal('Reparacion de Puerta')
                expect(newwork.addres).to.be.equal('C/ escoperta Nº Pum')

            })

    }
    after(() => disconnect())
})