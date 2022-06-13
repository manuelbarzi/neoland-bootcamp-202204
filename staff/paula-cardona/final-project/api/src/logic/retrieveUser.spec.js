require('dotenv').config()

const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User } = require('../models')
const { NotFoundError } = require('../errors')
const retrieveUser = require('./retrieveUser')
const { expect } = require('chai')

describe('retrieveUser', () => {
    before(() => connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())

    describe('when user already exists', () => {
        let user

        beforeEach(() =>  { //más de una linea ponemos {}
            user = new User({ name: 'Papa', surname: 'Gayo', username: 'papagayo', email:'papagayo@gmail.com', password:'123123123', address:'calle madrid'})
        
            return user.save() //guardar el usuario y el return es para que entre en los it
        })

        //it es una funcion del mocha y le paso 2 parametros, texto y callback
        
        it ('success on correct user id', () => //la función flecha lleva el return implicito
            retrieveUser(user.id)
                .then((user)=> { 
                    expect(user.constructor).to.equal(Object)
                    expect(user.name).to.equal('Papa')
                    expect(user.surname).to.equal('Gayo')
                    expect(user.username).to.equal('papagayo')
                    expect(user.email).to.equal('papagayo@gmail.com')
                    expect(user.password).to.be.undefined
                    expect(user.address).to.be.instanceOf(Array)
                    expect(user.id).to.be.undefined//undefined porque no quiero que me devuelva el user.id porque ya me lo se ya que es el que uso como parametro
                })
        )
        
        it ('fails when userid does not exist', () => {
            const wrongId = new ObjectId().toString() //crea un id de tipo mongoose

            return retrieveUser(wrongId)
                .then(() =>{
                    throw new Error('should not reach this point')
                })
                .catch((error) => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.be.equal(`user with id ${wrongId} does not exist`)
                })
        })

    })

    describe('when user does not exist', () => {
        it('fails on user id from non-existing user', () => {
            const unexistingUserId = new ObjectId().toString()

            return retrieveUser(unexistingUserId)
                .then(() => {
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




