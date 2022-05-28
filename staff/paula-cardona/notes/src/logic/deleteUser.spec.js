const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User } = require('../models')
const { expect } = require("chai")
const deleteUser = require('./deleteUser')
const { NotFoundError } = require('../errors')

describe('deleteUser', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => User.deleteMany())

    describe('when user exists', () =>{ 
        let user

        beforeEach(() =>  { //más de una linea ponemos {}
            user = new User({ name: 'Papa Gayo', username: 'papagayo', password:'123123123'})
            
            return user.save() //guardar el usuario en base de datos y el return es para que entre en los it
        })

        it('success in delete user with correct Id', ()=>{
            return deleteUser(user.id, user.password) //solo usamos la función
                .then((result)=>{
                    expect(result).to.be.undefined

                })
                .catch ((error) =>{
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.be.equal(`wrong credentials`)
                })
        })
        it ('fais when user exist but password is incorrect' ,() => {
            return deleteUser(user.id, '456456456')
                .then (() =>{ 
                    throw new Error('should not reach this point') //al ser un error
                })
                .catch ((error) =>{
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.be.equal(`wrong credentials`)
                })

        })
    })

    describe ('when user does not exist', ()=> {
        let user

        beforeEach(() =>  { //más de una linea ponemos {}
            user = new User({ name: 'Papa Gayo', username: 'papagayo', password:'123123123'})
            
            return user.save() //guardar el usuario en base de datos y el return es para que entre en los it
        })
    
        it('fails when userid does not exist', ()=>{
            wrongId = new ObjectId().toString()
            return deleteUser(wrongId, user.password ) //solo usamos la función
                .then(() =>{
                    throw new Error('should not reach this point') //al ser un error

                })
                .catch((error) => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.be.equal(`wrong credentials`)
                })
                
        })
        

    })

    afterEach(() => User.deleteMany())

    after(() => disconnect())
})

/*
-necesito una noteId 

*/