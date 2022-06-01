const { connect, disconnect, Types: {ObjectId}} = require('mongoose')
const { User, Note } = require("../models")
const retrievePublicNotes = require('./retrievePublicNotes')
const { expect } = require('chai')
const { NotFoundError } = require('../errors')

describe('listNotes', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))
    afterEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user exists', () => { 
        let userId 
       
        
        beforeEach (()=> {
            return User.create({name:'Jordi', username: 'Jorgesito', password: '123123123'}) //metodos staticos
                .then((user) => { 
                    userId = user.id 
                })
        })
    
        describe('when user already has notes', ()=> {
            let allCreatedNotes

            beforeEach(() => {
                const texts = [ //las posiciones del array se separan con comas
                    ['que paula me de los buenos dias', 1],
                    ['comprar lejia', 1],
                    ['sacar al perro', 0],
                    ['hacer la cena', 0],
                    ['ir a una playa nudista',0]
                ]
                const notesPromises = texts.map(elem => Note.create({ user: userId,  text: elem[0], audience: elem[1]})) 
                return Promise.all(notesPromises) 
                    .then ((result) => {
                        allCreatedNotes = result
                    })     
                
            })

            it ('user exists and notes too', () => { 
                debugger
                return retrievePublicNotes(userId) 
                    .then((arrayNotas) => { 
                        expect(arrayNotas).to.be.instanceOf(Array)
                        expect(arrayNotas.length).to.be.equal(2)

                        
                        arrayNotas.forEach(note=> { // del array de notas q llega del resultado de la función, por cada nota
                            expect(note.audience).to.be.equal(1) //miro si las propiedad audience que tiene es igual a audience 1
                                
                            
                           
                            
                        })

                    })
        
            })
        })

        it ('user exists and but notes do not', () => { //putisimas llaves return gracias
            return retrievePublicNotes (userId)
                 // llamo a nuestra funcion. con el return hago que no siga hasta que no retorne toda la cadena de .then
                .then((arrayNotas) => { // cuando tenga la respuesta de buscar las notas, me llega en un array
                    expect(arrayNotas).to.be.instanceOf(Array)
                    expect(arrayNotas.length).to.be.equal(0)
    
                    
                })
            // llamamos logic y hacemos las comprobaciones de que devuelva un array y de leght 5
    
        })

    })

    describe('when user does not exist', () => {
        it('fails on unexisting user id', () => {
            const unexistingUserId = new ObjectId().toString()

            return retrievePublicNotes(unexistingUserId) //es el valor de la palabra que he creado
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${unexistingUserId} does not exist`) //quiero que aparezca el valor de la palabra que he creado
                })

        })
    })
    after(() => disconnect())
})





/*
-creo un usuario
-creo 4 notas para ese usuario 2 publicas y 2 privadas
-hago la funcion
-espero las dos notas publicas
-espero un array de 2 posiciones
-miramos si las que nos devuelve son las dos publicas

*/