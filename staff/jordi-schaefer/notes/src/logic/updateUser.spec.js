const { connect, disconnect } = require('mongoose')
const { User } = require('../models')
const { NotFoundError } = require('../errors')
const updateUser = require('./updateUser')
const { expect } = require('chai')



describe('updateUser', () => {
    before(() => connect('mongodb://127.0.0.1:27017/notes-db-test'))

    beforeEach(() => User.deleteMany(),User.create({ name: 'wendy', username: 'wendy2', password: '123' }))
    afterEach(() => User.deleteMany())

    it('succeeds on existing user', () => {
        return User.create({ name: 'juan', username: 'juan2', password: '123' })
            .then(result => { return updateUser( result._id, 'juanchu')})
            .then(resultAnterior => {
                expect(resultAnterior).to.be.undefined

                return User.findOne({ username: 'juan2' })
            })
            .then(user => {
                expect(user.name).to.equal('juanchu')
                expect(user.username).to.equal('juan2')
                expect(user.password).to.equal('123')
            })
    })


    it('fails on non existing user', () => {
        return User.create({ name: 'juan', username: 'juan2', password: '123' })
            .then(resultNoUso => { return updateUser(`id_inventing`, 'juanchu')})
            .then(result =>{
                debugger
                expect(result).to.be.instanceOf(Error)
                expect(result.message).to.equal(`user not found`)
            })
            .catch(error => {
                debugger
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`user not found`)
                //expect(error.message).to.equal(`user with Id ${result._id} not found`))
            })
    })


    after(() => disconnect())

})