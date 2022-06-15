const { connect, disconnect } = require('mongoose')
const { User } = require('../models')
const { AuthError } = require('../errors')
const authenticateUser = require('./authenticateUser')
const { expect } = require('chai')

describe('authenticateUser', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => User.deleteMany())

    describe('when user already exists', () => {
        let user // Declaro variable para poder usarla en lso demas scopes

        beforeEach(() => {
            user = new User({ name: 'Papa Gayo', username: 'papagayo', password: '123123123' })
// Creo usuario y llo guardo para hacer comprovaciones 
            return user.save()
        })

        it('succeeds on correct credentials', () =>
            authenticateUser('papagayo', '123123123')
                .then(userId => { // mi funcion authenticate devuelve el ID
                    expect(userId).to.be.a('string') // compruevo que el id sea string
                    expect(userId).to.equal(user.id) // compruevo que el ID que me devuelve es el mismo que me el de la base de datos
                })
        )

        it('fails on incorrect password', () =>
            authenticateUser('papagayo', '123123123-wrong')
                .then(() => { // Error en el que no deveria entrar nunca ya que si no estari my funcion mal
                    throw new Error('should not reach this point')
                })
                .catch(error => { // comprovacion que el error que me envia es que yo le e especificado en mi funcion
                    expect(error).to.be.instanceOf(AuthError)
                    expect(error.message).to.equal('wrong credentials')
                })
        )

        it('fails on incorrect username', () =>
            authenticateUser('papagayo-wrong', '123123123')
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

    afterEach(() => User.deleteMany())

    after(() => disconnect())
})