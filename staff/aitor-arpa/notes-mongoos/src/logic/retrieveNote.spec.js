const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User } = require('../models')
const { NotFoundError } = require('../errors')
const retrieveUser = require('./retrieveUser')
const { expect } = require('chai')

describe('retrieveUser', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => User.deleteMany())

    describe('when user already exists', () => {
        let user

        beforeEach(() =>  { //más de una linea ponemos {}
            user = new User({ name: 'Papa Gayo', username: 'papagayo', password:'123123123'})
        
            return user.save() //guardar el usuario y el return es para que entre en los it
        })

        //it es una funcion del mocha y le paso 2 parametros, texto y callback
        
        it ('success on correct user id', () => {//la función flecha lleva el return implicito
            return retrieveUser(user.id)
                .then((user)=> { 
                    expect(user.constructor).to.equal(Object) //modelo
                    expect(user.name).to.be.equal('Papa Gayo')
                    expect(user.username).to.be.equal('papagayo')
                    expect(user.password).to.be.undefined //undefined porque no quiero que me la devuelva
                    expect(user.id).to.be.undefined //undefined porque no quiero que me devuelva el user.id porque ya me lo se ya que es el que uso como parametro
                })
        })
        
        it ('fails when userid does not exist', () => {
            const wrongId = new ObjectId().toString() //crea un id de tipo mongoose

            retrieveUser(wrongId)
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