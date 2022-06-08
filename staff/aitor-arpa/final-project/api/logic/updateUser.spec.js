const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User } = require('../models')
const { NotFoundError } = require('../errors')
const updateUser = require('./updateUser')
const { expect } = require('chai')

describe('updateUser', () => {
    before(() => connect('mongodb://localhost:27017/test'))

    beforeEach(() => User.deleteMany())

    describe('when user already exists', () => {
        let user 

        beforeEach(() => {
            user = new User({ name: 'Wendy Pan', username: 'wendypan', password: '123123123', rol: 1, DNI: '123123123s' })
// creo usuario nuevo 
            return user.save() 
        })
debugger
        it('succeeds on correct user data', () =>
            updateUser(user.id,'Wendy Pan2', 'wendypan2', '1231231231', 0, '123123123H')
                .then(result => {
                    expect(result).to.be.undefined

                    return User.findById(user.id)  
                })
                .then(user => { 
                    expect(user.name).to.equal('Wendy Pan2')
                    expect(user.rol).to.equal(0)
                    expect(user.password).to.equal('1231231231')
                    expect(user.DNI).to.equal('123123123H')
                })
        )

        it('fails on incorrect user id', () => {
            const wrongId = new ObjectId().toString()

            return updateUser(wrongId, 'Wendy Pan2', 'wendypan2', '1231231231', 0, '123123123H')
                .then(result => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError) // asi que espero que el error que me envia se instancia de notFOund
                    expect(error.message).to.equal(`user with id ${wrongId} does not exist`)// y que el mensaje es el indicado
                })
        })
    })

    describe('when user does not exist', () => {
        it('fails on unexisting user id', () => {
            const unexistingUserId = new ObjectId().toString()

            return updateUser(unexistingUserId, 'Wendy Pan2', 'wendypan2', '1231231231', 0, '123123123H')
                .then(result => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${unexistingUserId} does not exist`)
                })
        })
    })

    afterEach(() => User.deleteMany())

    after(() => disconnect())
})