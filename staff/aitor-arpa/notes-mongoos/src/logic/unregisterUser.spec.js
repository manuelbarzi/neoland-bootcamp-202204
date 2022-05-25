const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User } = require('../models')
const unregisterUser = require('./unregisterUser')
const { expect } = require('chai')


describe('authenticateUser', () => {

    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => User.deleteMany())
    debugger

    describe('Delete for user alredy exist', () => {
        let user

        beforeEach(() => {
            user = new User({ name: 'Papa Gayo', username: 'papagayo', password: '123123123' })

            return user.save()
        })
        it('succes on correct credentials', () =>

            unregisterUser(user.id)

                .then(result => {
                    expect(result).to.be.undefined


                    return User.findOne({ id: result })
                })
                .then(find => {
                    expect(find).to.be.null

                })
        )
    })
    describe('when user id does not exist and try to delete', () => {
        it('cant delete an inexsting user', () => {
            const unexistingUserId = new ObjectId().toString()
            unregisterUser(unexistingUserId)
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${unexistingUserId} does not exist`)
                })

        })
    })
})