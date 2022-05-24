const { connect, disconnect } = require('mongoose')
const { User } = require('../models')
const { ConflictError } = require('../errors')
const updateUser = require('./updateUser')
const { expect } = require('chai')



describe ('updateUser', () => { //función de que modifica el name
    debugger
    before(() => connect ('mongodb://localhost:27017/notes-db-test')) //antes de todo el test createUser connecta mongodb

    beforeEach(() => User.deleteMany()) //limpia los datos antes de cada test


    it('succeeds on name updated', () => {
        return User.create({ name: 'Wendy Pan', username: 'wendypan', password: '123123123'})
            .then(result => { // cojo el result del create de arriba, para cogerle la Id
                
                return updateUser( result._id , 'paula') //llamo a mi funcion de update
            }) 
            .then(resultDeArriba => { // cuando tenga la respuesta de update
                expect(resultDeArriba).to.be.undefined // mireo que sea undefined

                return User.findOne({ username: 'wendypan' }) // busco el usuario en la base
            })
            .then(user => { // cuando tengo la respues de buscar usuario
                expect(user.name).to.equal('paula') 
                expect(user.username).to.equal('wendypan')
                expect(user.password).to.equal('123123123') 
            })
    })

    it ('fails when user does not exist', () => {
        return User.create({ name: 'Wendy Pan', username: 'wendypan', password: '123123123'})
            .then(resultNoVoyaUsar => {
                
                return updateUser(`jwkdnfljwsdanfId`, 'paula')
            })
            .then(result =>{
                expect(result).to.be.instanceOf(Error)
                expect(result.message).to.equal(`id not found`)
            })
            .catch(error => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`id not found`)
            })

    })

/*
crear un usuario nuevo
intentar el update de una id que no existe, 'jjfiurfnc85tur8ejfr' ,'paula'
miramos ue el result, sea un error (pork no ha funcionado)
*/



        
    afterEach(() => User.deleteMany())

    after(() => disconnect())
})