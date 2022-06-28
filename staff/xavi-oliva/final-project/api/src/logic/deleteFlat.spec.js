const { expect } = require('chai')
const { connect, Types: { ObjectId }, disconnect } = require('mongoose')
const { User, Flat } = require('../models')
const deleteFlat = require('./deleteFlat')
const { NotFoundError, ConflictError } = require('errors')

describe('deleteFlat', () => {
    before(() => connect('mongodb://localhost:27017/flats-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Flat.deleteMany()]))
    afterEach(() => Promise.all([User.deleteMany(), Flat.deleteMany()]))

    describe('when user exists', () => {
        let userId
        
        beforeEach (()=> {
            return User.create({name:'user1', email: 'user1@email.com', password: '123123123'})
                .then((user) => {
                    userId = user.id 
            })
        })

        it ('succeeds with flats and correct credentials', () => {
            let flatId
            return Flat.create({ user: userId,  title: 'title'})
                .then((result)=> {
                    flatId = result.id

                    return deleteFlat(userId, flatId)
                }) 
                .then((result)=>{
                    expect(result).to.be.undefined

                    return Flat.findById(flatId) 
                })
                .then((flat) => {
                    expect(flat).to.be.null
                })
        })

        it ('fails without flats', () => {
            const wrongId = new ObjectId().toString()

            return deleteFlat(userId, wrongId)
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`flat with id ${wrongId} does not exist`)
                })
        })
    })

    describe('When user belongs to the flat', () => { 

        it ('fails with wrong user Id', () => {
            const wrongId = new ObjectId().toString()
            const userId = new ObjectId().toString()

            let flatId
            return Flat.create({ user: userId,  title: 'title'})
                .then((result)=> {
                    flatId = result.id

                    return deleteFlat(wrongId, flatId)
                }) 
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(ConflictError)
                    expect(error.message).to.equal(`flat with id ${flatId} does not belong to user with id ${wrongId}`)
                })
        })
    })

    after(() => disconnect())
})