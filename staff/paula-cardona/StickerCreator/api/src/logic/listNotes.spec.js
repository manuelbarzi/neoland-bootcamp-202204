const { connect, disconnect, Types: {ObjectId}} = require('mongoose')
const { User, Note } = require("../models")
const listNotes = require('./listNotes')
const { expect } = require('chai')
const {NotFoundError} = require('../errors')

describe('listNotes', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))
    afterEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user exists', () => { //voy a preparar mi test
        let userId //lo declaro fuera para poderlo usar en los test
       
        
        beforeEach (()=> {
            // user = new User({name:'Jordi', username: 'Jorgesito', password: '123123123'})
            // return user.save()
            return User.create({name:'Jordi', username: 'Jorgesito', password: '123123123'}) //metodos staticos
                .then((user) => { //guardo el user creado
                    userId = user.id // con el resultado del user que creamos , guardamos la propiedad de user.id que sera userId guardado en linea9.
                    // el .id lo sacamos de fuera del DOC, no necesitamos lean() si solo queremos sacar una propiedad
                    // lo necesitariamos si quisieramos un objeto con varias propiedades
            })

        })
    
        describe('when user already has notes', ()=> {
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
                return Promise.all(notesPromises) // aqui le digo que me espere todas las respuestas, se guardan de forma asincronica por eso ponemos promises, porque cuando esten todas guardadas que las devuelva todas
                    .then ((result) => {
                        allCreatedNotes = result
                    })                                   // y devolvere las respuestas de haber creado notas con un then para que vayan a allcreatedpromises y pueda usarlo en tests

                /*let note1,  note2, note3
                beforeEach (() => { //al crearla en newNote ya tiene todas sus propiedades como el id
                    note1= new Note ({user:user.id, text:'note1'})
                    note2= new Note ({user:user.id, text:'note2'})
                    note3= new Note ({user:user.id, text:'note3'})

                    return Promises.all([note1.save(), note2.save(), note3.save()]) //lo guardamos en la base de datos
                }
                */
            })

            it ('user exists and notes too', () => { //putisimas llaves return gracias
                return listNotes(userId) // llamo a nuestra funcion. con el return hago que no siga hasta que no retorne toda la cadena de .then
                    .then((arrayNotas) => { // cuando tenga la respuesta de buscar las notas, me llega en un array
                        expect(arrayNotas).to.be.instanceOf(Array)
                        expect(arrayNotas.length).to.be.equal(5)

                        //vamos a comprobar que las notas que guardamos en mongoose son las que me llegan con mi función de traer notas
                        arrayNotas.forEach(note=> { //para cada nota que nos llega del listNotes
                            const coincide = allCreatedNotes.some(_note=>{  //es como un for Each el some. ira por cada uno viendo si alguno cumple la condicion y sabremos si la nota esta //las notas que hemos creado ttienen diferente orden que las q nos llega por la función, entonces tenemos que ver si alguna de las que nos llega coinciden con las que tenemos
                                return _note.id === note.id && _note.text === note.text
                            }) 
                            // si alguna nota del arrayNotes no coincide con ninguna de la funcion createdNotes notes, nos enviará false
                            expect(coincide).to.be.true //si solo una ya coincide tendremos true.
                        })

                    })
        
            })
        })

        it ('user exists and but notes do not', () => { //putisimas llaves return gracias
            return listNotes(userId)
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

            return listNotes(unexistingUserId) //es el valor de la palabra que he creado
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




