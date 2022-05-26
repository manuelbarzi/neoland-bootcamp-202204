const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User } = require('../models')
const { NotFoundError } = require('../errors')
const deleteUser = require('./deleteUser')
const { expect } = require('chai')


describe('deleteUser', () => {
    before(() => connect('mongodb://127.0.0.1:27017/notes-db-test'))

    beforeEach(() => User.deleteMany())

    describe('when user exists', () =>{ 
        let user

        beforeEach(() =>  { //más de una linea ponemos {}
            user = new User({ name: 'Papa Gayo', username: 'papagayo', password:'123123123'})
            
            return user.save() //guardar el usuario y el return es para que entre en los it
        })


        it('success in delete user with correct Id', () =>
            deleteUser(user.id) //solo usamos la función
                .then((result)=>{
                    expect(result).to.be.undefined

                    return User.findById(user.id)  //ponemos return para que continue con la siguiente ya que espero un result(aunqe sea vacio)
                })
                .then((result)=> //null= que esa vacio     si pusieramos undefined seria decir que quiza el user esta incompleto pero existe por ejemplo.
                    expect(result).to.be.null
                )
        )
        

        it('fails when userid does not exist', ()=>{
            wrongId = new ObjectId().toString()
            return deleteUser(wrongId) //solo usamos la función
                .then(() =>{
                    throw new Error('should not reach this point')

                })
                .catch((error) => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.be.equal(`user with id ${wrongId} does not exist`)
                })
                
        })

    })



    afterEach(() => User.deleteMany())

    after(() => disconnect())
})