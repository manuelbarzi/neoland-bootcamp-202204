// TTD Hacemos el spec
// conectamos a la BBDD y hacemos toda la config necesaria
// Borramos todos los documentos de notes (deleteMany)
// Borramos todos los documentos de users (deleteMany)
// Creamos un caso de uso concreto (happy path)
// creamos un usuario y guardamos el id para luego poder usarlo para siguientes pasos
// creamos varias notas para ese usuario (unas 5)
// LLamamos a la función logic correspondiente para comprobar su funcionamiento (happy path)
// Comprobamos si la respuesta es un array, tiene todas las notas introducidas (length) y
// comprobamos que son las notas que he metido en el aterior paso
// Borranmos todos los documentos de notes (deleteMany)
// Borranmos todos los documentos de users (deleteMany)

const { connect, disconnect, Types: { ObjectId }, Model } = require('mongoose')
const { User, Note } = require('../models')
const { NotFoundError,AuthError } = require('../errors')
const listNote = require('./listNote')
const { expect } = require('chai')
describe('listnotees', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))
    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))
    describe('when user already exists', () => {
        let userId
        let note2Id = new ObjectId().toString()
        beforeEach(() => {
            return User.create({ name: 'Yulen', username: 'Yulen', password: '123123123' })
                .then(({ id }) => {
                    userId = id
                    Note.create([{ user: userId, text: 'nota 1' }, {_id:note2Id, user: userId, text: 'nota 2' }, { user: userId, text: 'nota 3' }])
                })
        })
        it('succeeds on correct credentials', () => {
            return listNote(userId,note2Id)
                .then(result => {
                    expect(result.id).to.be.equal(note2Id)
                    expect(result.text).to.be.equal('nota 2')
                    expect(result.user.toString()).to.be.equal(userId)
                    expect(result.error).to.be.undefined
                  
                })
             
                

        })
        describe('when user exists but not the note', () => {
           
            })
            it('Not Foud Notes', () => {
                const invaUserId = 'rgfgsfdgsdfg'
                return listNote(userId, invaUserId)
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.be.equal('Not Found Notes')
                        
                    })
                    

            })

            describe('when user not exists', () => {
           
            })
            it('Wrong credentials credentials', () => {
                const invaUserId = 'rgfgsfdgsdfg'
                return listNote(invaUserId, note2Id)
                    .catch(error => {
                        expect(error).to.be.instanceOf(AuthError)
                        expect(error.message).to.be.equal('wrong credentials')
                        
                    })
                    

            })
        })
        afterEach(() => User.deleteMany())
        after(() => disconnect())
    })
