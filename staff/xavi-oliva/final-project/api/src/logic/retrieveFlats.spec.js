const { expect } = require('chai')
const { connect, Types: { ObjectId }, disconnect } = require('mongoose')
const { User, Flat } = require('../models')
const retrieveFlats = require('./retrieveFlats')
const { NotFoundError } = require('errors')

describe('retrieveFlats', () => {
    before(() => connect('mongodb://localhost:27017/flats-db-test'))

    beforeEach(() => Promise.all([Flat.deleteMany(), User.deleteMany()]))

    describe('on existing users and flats', () => {
        let arrayOfFlats = [], usersArray = []

        let titleArray = [
            'title1',
            'title2',
            'title3'
        ]

        beforeEach(() => {
            usersArray = [
                { name: 'user1', email: 'user1@email.com', password: '321321321' },
                { name: 'user2', email: 'user2@email.com', password: '321321321' }
            ]

            const usersPromises = usersArray.map(user => {
                return User.create(user)
            })
            return Promise.all(usersPromises)
                .then(users => {
                    usersArray = users
                    
                    const flatsPromises = titleArray.map(title => {
                        return Flat.create({ user: usersArray[0].id, title: title })
                    })
                    return Promise.all(flatsPromises)
                })
                .then(flats => {
                    flats.forEach(flat => arrayOfFlats.push(flat))
                })
        })

        it('succeeds on correct userid and existing flats', () =>
            retrieveFlats(usersArray[0].id)
                .then(result => {
                    expect(result).to.be.instanceOf(Array)
                    expect(result.length).to.equal(3)

                    result.forEach(flat => {
                        const found = arrayOfFlats.some(_flat => {
                            return _flat.title === flat.title && flat.id === _flat.id
                        })

                        expect(found).to.be.true
                    })
                })
        )

        it('fails on wrong user id', () => {
            const wrongUserId = new ObjectId().toString()

            return retrieveFlats(wrongUserId)
                .then(() => {
                    throw new Error('it should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${wrongUserId} does not exist`)
                })
        })

        it('succeed on correct user id that has no flats', () => {
            return retrieveFlats(usersArray[1].id)
                .then(result => {
                    expect(result).to.be.instanceOf(Array)
                    expect(result.length).to.equal(0)
                })
        })
    })

    afterEach(() => Promise.all([Flat.deleteMany(), User.deleteMany()]))

    after(() => disconnect())
})