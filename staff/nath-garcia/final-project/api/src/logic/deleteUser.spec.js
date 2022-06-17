const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User } = require('../models')
const { NotFoundError, AuthError } = require('../errors')
const deleteUser = require('./deleteUser')
const { expect } = require('chai')

describe('deleteUser', () => {
    before(() => connect('mongodb://localhost:27017/final-pro-test'))

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

        it('succeeds on correct user data', () => {
            return deleteUser(user.id, user.password)
                .then(result => {
                    expect(result).to.be.undefined

                    return User.findById(user.id)
                })
                .then((result) => {
                    expect(result).to.be.null
                })
        })

        it('fais when user exist but password is incorrect', () => {
            return deleteUser(user.id, '456456456')
                .then(() => {
                    throw new Error('should not reach this point') 
                })
                .catch((error) => {
                    expect(error).to.be.instanceOf(AuthError)
                    expect(error.message).to.be.equal(`wrong credentials`)
                })
        })
    })

    describe ('when user does not exist', ()=> {
        let user

        beforeEach(() =>  {
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
    
        it('fails when userid does not exist', ()=>{
            wrongId = new ObjectId().toString()
            return deleteUser(wrongId, user.password ) 
                .then(() =>{
                    throw new Error('should not reach this point') 

                })
                .catch((error) => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.be.equal(`user with id ${wrongId} does not exist`)
                })
                
        })
        

    })
    afterEach(() => User.deleteMany())

    after(() => disconnect())
})

