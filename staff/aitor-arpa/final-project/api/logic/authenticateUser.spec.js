const { connect, disconnect, isValidObjectId} = require('mongoose')
const { User } = require('../models')
const { AuthError } = require('../errors')
const authenticateUser = require('./authenticateUser')
const { expect } = require('chai')

describe('authenticateUser', () => {
    before(() => connect('mongodb://localhost:27017/controlz'))

     

    describe('when user already exists', () => {
        let user 
       
        beforeEach(() => {
            user = new User ({ name: 'Wendy Pan', username: 'wendypan', password: '123123123', rol: 1, DNI: '123123123s' })

            user.save()
        })
debugger
        it('succeeds on correct credentials', () =>
            authenticateUser('wendypan', '123123123')
                .then(userId => { 
                   debugger
                   expect(isValidObjectId(userId)).to.be.true
                })
        )

        it('fails on incorrect password', () =>
            authenticateUser('wendypan', '123123123-wrong')
                .then(() => { // Error en el que no deveria entrar nunca ya que si no estari my funcion mal
                    throw new Error('should not reach this point')
                })
                .catch(error => { // comprovacion que el error que me envia es que yo le e especificado en mi funcion
                    expect(error).to.be.instanceOf(AuthError)
                    expect(error.message).to.equal('wrong credentials')
                })
        )

        it('fails on incorrect username', () =>
            authenticateUser('wendypan-wrong', '123123123')
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(AuthError)
                    expect(error.message).to.equal('wrong credentials')
                })
        )
    })

    describe('when user does not exist', () => {
        it('fails on credentials from non-existing user', () =>
            authenticateUser('papagayo', '123123123')
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(AuthError)
                    expect(error.message).to.equal('wrong credentials')
                })
        )
    })

    /* afterEach(() => User.deleteMany()) */

    after(() => disconnect())
})