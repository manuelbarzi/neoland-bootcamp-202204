const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require("../models")
const { NotFoundError } = require('../errors')
const listNotes = require('./listNotes')
const { expect } = require('chai')

describe('listNotes', () => {
    before(() => connect('mongodb://127.0.0.1:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))
    afterEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user exists', () => { //voy a preparar mi test
        let userId //lo declaro fuera para poderlo usar en los test
        
        beforeEach (()=> {

            // este sistema te crea el id de mongose antesde enviarle el usuario, asi ya tengo toda la info aqui
            // user = new User({name:'Jordi', username: 'Jorgesito', password: '123123123'})
            // return user.save()
            return User.create({name:'Jordi', username: 'Jorgesito', password: '123123123'}) //metodos staticos
                .then((user) => {
                    userId = user.id // con el resultado del user que creamos , guardamos la propiedad de user.id que sera userId guardado en linea9.
                    // el .id lo sacamos de fuera del DOC, no necesitamos lean() si solo queremos sacar una propiedad
                    // lo necesitariamos si quisieramos un objeto con varias propiedades
            })
        })

        describe('when user already has notes',() => {

            let allCreatedNotes

            beforeEach(() => {
                const texts = [
                    'que paula me de los buenos dias',
                    'comprar lejia',
                    'sacar al perro',
                    'hacer la cena',
                    'ir a una playa nudista'
                ]
                const notesPromises = texts.map(text => Note.create({ user: userId,  text: text})) //map devuelve array de promesas
                // las promesas son "palabra promesa" cositas pendientes de respuesta
                return Promise.all(notesPromises) // aqui le digo que me espere todas las respuestas
                    .then((result) => {
                        allCreatedNotes = result
                    })
                // y devolvere las respuestas de haber creado notas
    
                // solo tiene sentido usar el promise porque estamos langando MAS DE UNA PETICION
                // y queremos asegurar que acaban todas
                // si hicieramos solo una peticion, nos bastaria con usar el .then()
    
    
                // promise all es un metodo statico de la clase promise k crea una promera a partir de un array de promesas
                // se espera que terminan todas para continuar
            })

            it ('success on correct credentials', () => {
                return listNotes(userId) // llamo a nuestra funcion 
                    .then((arrayNotas) => { // cuando tenga la respuesta de buscar las notas, me llega en un array
                        expect(arrayNotas).to.be.instanceOf(Array)
                        expect(arrayNotas.length).to.be.equal(5)

                        arrayNotas.forEach(note => { // para cada nota que nos llega
                            const coincide = allCreatedNotes.some(_note => { // miramos en todas las notas, si alguno cumple la condicion, sabremos si la nota esta
                                return _note.id === note.id && _note.text === note.text
                            }) 
                            // si alguna nota del arrayNotes, NO coincide con NINGUNA del createdNotes, nos enviara false
                            // si solo una ya coincide, tendremos true

                            // primera nota,, alguna corresponde con esa? se supone que si
                            // segunda nota, alguna corresponde con esa?? etc..
                            
                            expect(coincide).to.be.true
                        })
                    })
            })

        })


        it ('success without notes but correct credentials', () => {
            return listNotes(userId)
                .then((arrayNotas) => { 
                    expect(arrayNotas).to.be.instanceOf(Array)
                    expect(arrayNotas.length).to.be.equal(0)
                })
        })

    })


    describe('When user does not exist', () => { 

        it ('fails with wrong user Id', () => {
            const wrongId = new ObjectId().toString()

            return listNotes(wrongId)
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${wrongId} does not exist`)
                })
        })

    })

    after(() => disconnect())
})
/*
            const wrongId = new ObjectId().toString()



then((va a coger como parametro lo que espera de la promesa)) => {
    callback

}






    describe(listNotes)

- before: connect√
- beforeEach: borrar todos los usuarios y notas √

describe ('when user exists') √

-beforeEach: user= new User(..) y lo guardamos

it(user exists and notes too){
    - creamos 3-5 notas (usamos User.create)
    -usamos la función del paquete logic (listNotes) para recuperar las notas del usuario existente
    -esperamos recibir un array
    -esperamos que cumpla el length
    -esperamos que las notas sean las que hemos creado
}

borramos todos los usuarios y notas


it(usuario existe y notas no)


it(usuario y notaas existen pero id no)


it()


    
FUNCION listNotes
-> le pasas el userID
-> te devuelve todas las notas del user

    
}





*/
