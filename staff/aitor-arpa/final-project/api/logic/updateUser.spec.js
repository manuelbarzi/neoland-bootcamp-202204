const { connect, disconnect } = require('mongoose')
const { User } = require('../models')
const { ConflictError, AuthError } = require('../errors')
const updateUser = require('./updateUser')
const { expect } = require('chai')
const { user } = require('../models/schemas')


describe('updateUser', () => {
    debugger
    let usera
    let userup
    
    before(() => connect('mongodb://localhost:27017/test')) // conexion a la base de datos 

    beforeEach(() => {
        User.deleteMany()
       
        usera = new User({ name: 'Miguel', username: 'Mingu', password: '123123123', role: 'admin', DNI: '123123123s' })
       
        return  usera.save()
    })

    it('succeeds on correct credentials', () => {
        userup = new User({ name: 'Miguel', username: 'Mingu', password: '123123123', role: 'worker', DNI: '123123123s' })
       userup.save()
        return updateUser(usera.id.toString(),userup.id.toString(), 'pepe', 'pepe', '123123', 'worker', '12314345s', 'email@email.com')
            .then(result => {
                expect(result).to.be.undefined
            
            })
    })
    it('fails when user not exist', () => {
        return updateUser(usera.id.toString(),userup.id.toString(), 'pepe', 'pepe', '123123', 'worker', '12314345s', 'email@email.com')       

            .catch(error => { 
                expect(error).to.instanceOf(ConflictError)
                expect(error.message).to.equal(`user with username jordr already exists`) // devuevle el mensaje 
            })
    })
    it('fails when user not exist', () => {
        userw = new User({ name: 'PACO', username: 'PACO', password: '123123123', role: 'worker', DNI: '123123123s' })
        userw.save()
        return updateUser(userw.id.toString(),userup.id.toString(), 'Javi', 'Javi', '123123', 'worker', '12314345s', 'email@email.com')

            .catch(error => { // el resultado de la funcion 
                expect(error).to.instanceOf(AuthError)
                expect(error.message).to.equal(`user with username Javi already exists`) // devuevle el mensaje 
            })
    })

    afterEach(() => User.deleteMany())

    after(() => disconnect())
})