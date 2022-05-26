const { connect, disconnect } = require('mongoose')
const { User, Note } = require('../models')
const { NotFoundError } = require('../errors')
const listNotes = require('./listNotes')
const { expect } = require(chai)

describe('listNotes', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user exists', () => {
        let userId //lo declaro fuera para poderlo usar en los test
        
        beforeEach (()=> {
            // user = new User({name:'Jordi', username: 'Jorgesito', password: '123123123'})
            // return user.save()
            return User.create({name:'Jordi', username: 'Jorgesito', password: '123123123'}) //metodos staticos
                .then((user) => {
                    userId = user._id // con el resultado del user que creamos , guardamos la propiedad de user._id que sera userId guardado en linea9.
            })
        })

        it ('user exists and notes too', () => {

            texts = [ 'first note', 'second note', 'third note', 'fourth note', 'fifth note']
            Notes.create({ _id: userId,  text: 'text'})
            
            
        })
    })

})
