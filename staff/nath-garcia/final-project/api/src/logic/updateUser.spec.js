const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User } = require('../models')
const { NotFoundError } = require('../errors')
const updateUser = require('./updateUser')
const { expect } = require('chai')

describe('updateUser', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => User.deleteMany())

    describe('when user already exisits', () => {
        let user

        beforeEach(() => {
            user = new User({
                name: 'Peppa',
                surname: 'Pig',
                username: 'lapeppa',
                email: 'lapeppa@mail.com',
                phone: '643643643',
                password: '01020300'
            })

            return user.save()
        })

        it('succeeds on correct user data', () =>
            updateUser(user.id, 'Peppa', 'Pig', 'lapeppa', 'lapeppa@mail.com', '643643000', '01020300')
                .then(result => {
                    expect(result).to.be.undefined

                    return User.findById(user.id)
                })
                .then(user => {
                    expect(user.name).to.equal('Peppa')
                    expect(user.surname).to.equal('Pig')
                    expect(user.username).to.equal('lapeppa')
                    expect(user.email).to.equal('lapeppa@mail.com')
                    expect(user.phone).to.equal('643643000')
                    expect(user.password).to.equal('01020300')
                })
        )

        it('fails on incorrect user id', () => {
            const wrongId = new ObjectId().toString()

            return updateUser(wrongId, 'Peppa', 'Pig', 'lapeppa', 'lapeppa@mail.com', '643643000', '01020300')
                .then(result => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${wrongId} does not exist`)
                })
        })
    })

    describe('when user does not exist', () => {
        it('fails on unexisting user id', () => {
            const unexistingUserId = new ObjectId().toString()

            return updateUser(unexistingUserId, 'Peppa', 'Pig', 'lapeppa', 'lapeppa@mail.com', '643643000', '01020300')
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
