const { connect, disconnect } = require('mongoose')
const { User } = require('../models')
const { ConflictError } = require('../errors')
const registerUser = require('./registerUser')
const { expect } = require('chai')



describe ('registerUser', () => { //función de createUser

    before(() => connect ('mongodb://localhost:27017/notes-db-test')) //antes de todo el test createUser connecta mongodb

    beforeEach(() => User.deleteMany()) //limpia los datos antes de cada test

    it('succeeds on correct credentials', () => {
        return registerUser('Peter Pan', 'peterpan', '123123123') //con el return lo que hacemos es que como createUser es asincrono el primer .then quedará esperando ese result y luego se ejecutará
            .then(result => { // este .then se ejecutara cuando termine la función de createUser tanto sea como buena o como error. me puede venir el result,
                expect(result).to.be.undefined //espero que el resultado de createUser sea undefined, porque no le envio nada
                //le devuelve undefined porque en la función de create user no nos devuelve nada el primer .then
                return User.findOne({ username: 'peterpan' }) // con return espero que me devuelva el usuario encontrado en la base de datos de usuarios con el username: peter pan
            })
            .then(user => { //asincronia, cuando user.findOne me haga return, empiezo este .then con el usuario que me haya devuelto
                expect(user.name).to.equal('Peter Pan') 
                expect(user.username).to.equal('peterpan')
                expect(user.password).to.equal('123123123')
            })
    })

    it('fails when user already exists', () => { 
        return User.create({ name: 'Wendy Pan', username: 'wendypan', password: '123123123'}) // creo un usuario
            .then(() => registerUser('Wendy Pan', 'wendypan', '123123123')) // cuando ya se ha creado, intento crear otro con mi funcion
            .catch(error => { //caza el error
                expect(error).to.be.instanceOf(ConflictError) //espero que sea instancia de ConflictError
                expect(error.message).to.equal(`user with username wendypan already exists`)
            })
    })

    afterEach(() => User.deleteMany())

    after(() => disconnect())
})



    