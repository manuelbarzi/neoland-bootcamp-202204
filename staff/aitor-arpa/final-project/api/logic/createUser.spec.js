const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User } = require('../models')
const { ConflictError, AuthError } = require('../errors')
const createUser = require('./createUser')
const { expect } = require('chai')
const { user } = require('../models/schemas')


describe('createUser', () => {
    debugger
    let usera
    let userw
    let worgid
    before(() => connect('mongodb://localhost:27017/test')) // conexion a la base de datos 

    beforeEach(() => {
        User.deleteMany()
       
        usera = new User({ name: 'Miguel', username: 'Mingu', password: '123123123', role: 'admin', DNI: '123123123s' })
       
        return  usera.save()
    })

    it('succeeds on correct credentials', () => {
        return createUser(usera.id.toString(), 'pepe', 'pepe', '123123', 'worker', '12314345s', 'email@email.com')
            .then(result => {
                
                expect(result.name).to.equal('pepe')
                expect(result.username).to.equal('pepe')
                expect(result.password).to.equal('123123')
                expect(result.role).to.be.equal('worker')
            })
    })
    it('fails when user not exist', () => {
        return createUser(usera.id.toString(), 'pepe', 'pepe', '123123', 'worker', '12314345s', 'email@email.com')       

            .catch(error => { 
                expect(error).to.instanceOf(ConflictError)
                expect(error.message).to.equal(`user with username jordr already exists`) // devuevle el mensaje 
            })
    })
    it('fails when user not exist', () => {
        userw = new User({ name: 'PACO', username: 'PACO', password: '123123123', role: 'worker', DNI: '123123123s' })
        userw.save()
        return createUser(userw.id.toString(), 'Javi', 'Javi', '123123', 'worker', '12314345s', 'email@email.com')

            .catch(error => { // el resultado de la funcion 
                expect(error).to.instanceOf(AuthError)
                expect(error.message).to.equal(`user with username Javi already exists`) // devuevle el mensaje 
            })
    })

    afterEach(() => User.deleteMany())

    after(() => disconnect())
})