const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User } = require('../../../../final-project/api/models')
const { NotFoundError } = require('../../../../final-project/api/errors')
const updateUser = require('./updateUser')
const { expect } = require('chai')

describe('updateUser', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => User.deleteMany())

    describe('when user already exists', () => {
        let user // declaro variable para poder utilizarlas dentro

        beforeEach(() => {
            user = new User({ name: 'Papa Gayo', username: 'papagayo', password: '123123123' })
// creo usuario nuevo 
            return user.save() // .save lo guardo es un metodo propio de mongoose
        })

        it('succeeds on correct user data', () =>
            updateUser(user.id, 'Pepe Gayo', 26, 'pepe@gayo.com', '+34123123123')
                .then(result => {
                    expect(result).to.be.undefined
// como la funcion no devuelve nada espero que el resultiado sea undefine 
                    return User.findById(user.id)  // busco el usuario por su ID
                })
                .then(user => { // el resultado de la busqueda miro que las propiedades sean las mismas
                    // que le e indicado en la funcion update
                    expect(user.name).to.equal('Pepe Gayo')
                    expect(user.age).to.equal(26)
                    expect(user.email).to.equal('pepe@gayo.com')
                    expect(user.phone).to.equal('+34123123123')
                })
        )

        it('fails on incorrect user id', () => {
            const wrongId = new ObjectId().toString()

            return updateUser(wrongId, 'Pepe Gayo', 26, 'pepe@gayo.com', '+34123123123')
                .then(result => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {// en la funcion update si falla nod devuelve un NotfoundError
                    expect(error).to.be.instanceOf(NotFoundError) // asi que espero que el error que me envia se instancia de notFOund
                    expect(error.message).to.equal(`user with id ${wrongId} does not exist`)// y que el mensaje es el indicado
                })
        })
    })

    describe('when user does not exist', () => {
        it('fails on unexisting user id', () => {
            const unexistingUserId = new ObjectId().toString()
// declaro variable con un Id proporcionado por mongosse i compruevo si ese id esta en mi base de datos
            return updateUser(unexistingUserId, 'Pepe Gayo', 26, 'pepe@gayo.com', '+34123123123')
                .then(result => {
                    throw new Error('should not reach this point')
                })
                .catch(error => { // como no va existir enmi base de datos que me envie mis errores
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${unexistingUserId} does not exist`)
                })
        })
    })

    afterEach(() => User.deleteMany())

    after(() => disconnect())
})