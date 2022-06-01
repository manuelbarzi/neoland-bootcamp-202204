const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require("../models")
const updateNote = require('./updateNote')
const { expect } = require('chai')
const { NotFoundError } = require('../errors')

describe('updateNote', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))
    afterEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user exists', () => { //voy a preparar mi test
        let userId //lo declaro fuera para poderlo usar en los test

        beforeEach(() => {
            // user = new User({name:'Jordi', username: 'Jorgesito', password: '123123123'})
            // return user.save()
            return User.create({ name: 'Jordi', username: 'Jorgesito', password: '123123123' }) //metodos staticos
                .then((user) => {
                    userId = user.id // con el resultado del user que creamos , guardamos la propiedad de user.id que sera userId guardado en linea9.
                    // el .id lo sacamos de fuera del DOC, no necesitamos lean() si solo queremos sacar una propiedad
                    // lo necesitariamos si quisieramos un objeto con varias propiedades
                })
        })

        describe('when user already has notes', () => {
            let noteId

            beforeEach(() => {
                return note = Note.create({ user: userId, text: 'jelou' })
                    .then((_note) => { //me devuelve la nota entera
                        noteId = _note.id //guardo solo el id de la nota
                    })

            })

            it('user exists and note too', () => { //putisimas llaves return gracias
                const text = 'bye'
                return updateNote(userId, noteId, text) // llamo a nuestra funcion. con el return hago que no siga hasta que no retorne toda la cadena de .then
                    .then((result) => {
                        expect(result).be.undefined

                        return Note.findById(noteId)

                        
                    })
                    .then(note => {
                        expect(note.text).to.equal('bye')
                    })

            })
            it('user exists but notes do not', () => {
                const wrongId = new ObjectId().toString() //crea un id de mongoose (los numeros chungos) y me lo pone en string

                return updateNote(userId, wrongId, 'hola')
                    .then(result => {
                        throw new Error('should not reach this point')
                    })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`note with id ${wrongId} does not exist`)
                    })


            })

        })
        describe('when user does not exist', () => {
            it('fails on unexisting user id', () => {
                const unexistingWrongId = new ObjectId().toString()

                return Note.create({ user: userId, text: 'jelou' })
                    .then((_note) => { //me devuelve la nota entera
                        noteId = _note.id //guardo solo el id de la nota

                        return updateNote(unexistingWrongId, noteId, 'jelouuuu')
                    })
                    .then(() => {
                        throw new Error('should not reach this point')
                    })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`user with id ${unexistingWrongId} does not exist`) //quiero que aparezca el valor de la palabra que he creado
                    })

            })
            after(() => disconnect())
        })
    })
})