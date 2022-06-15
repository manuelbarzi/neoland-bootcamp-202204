const { connect, disconnect } = require('mongoose')
const { User } = require('../models')
const { AuthError } = require('../errors')
const authenticateUser = require('./authenticateUser')
const { expect } = require('chai')

describe('authenticateUser', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => User.deleteMany())

    describe('when user already exists', () => {
        let user // Declara variable para poder usarla en los todos los scope siguentes

        beforeEach(() => { // Crea Usuario para todos los demas It
            user = new User({ name: 'Papa Gayo', username: 'papagayo', password: '123123123' })

            return user.save()
        })

        it('succeeds on correct credentials', () =>
            authenticateUser('papagayo', '123123123')
                .then(userId => { // Resultado del authenticate
                    expect(userId).to.be.a('string')
                    expect(userId).to.equal(user.id)
                })
        )

        it('fails on incorrect password', () =>
            authenticateUser('papagayo', '123123123-wrong')
                .then(() => { // () Devuelve el resultado igual pero como no lo voy a usar no lo declaro
                    throw new Error('should not reach this point')
                })
                .catch(error => {  // Capta el error del authenticate y los expulsa por aqui
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