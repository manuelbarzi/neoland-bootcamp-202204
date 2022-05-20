const { access, constants, readdir, unlink } = require('fs')
const createUser = require('./createUser')
const { expect } = require('chai')

describe('createUser', () => {
    it('succeeds on new user and correct user data', done => {//done es el primer (y unico por ahora) parámetro de la callback de it para determinar cuando hemos terminado. Es el último callback que usamos en la cadena de callbacks
        debugger
        readdir(`./db/users`, (error, files) => {//uso un readdir para leer de los archivos que hay en la capeta db.
            if (error) return done(error)//si el readdir tiene algún error, el proceso para por aquí. ()

            let count = 0, _error

            if (files.length) {
                files.forEach(file => {
                    unlink(`./db/users/${file}`, error => {
                        if (!_error) {
                            if (error) return done(_error = error)

                            count++

                            if (count == files.length) {
                                createUser('John Doe', 'johndoe', '1234', (error, userId) => {
                                    expect(error).to.be.null

                                    expect(userId).to.be.a('string')

                                    const file = `./db/users/${userId}.json`// con el id cojo el archivo del supuesto usuario creado

                                    //access verififica si un archivo creado ya existe.Para eso le pasamos el archivo, fs.constants.F_OK y la callback con error caso tenga error.
                                    access(file, constants.F_OK, error => {
                                        expect(error).to.be.null
                                        //readFile leer el archivo. Para eso le pasamos el archivo, utf8 para leer como caracteres(si no leerá como bytes) y la callback con error caso tenga error y content (que vamos converte a un json(obj))
                                        readFile(file, 'utf8', (error, json) => {
                                            expect(error).to.be.null

                                            expect(json).to.be.a('string')
                                            //convertimos a objecto
                                            const user = JSON.parse(json)
                                            //expect la confirmación de los datos del user
                                            expect(user.name).to.be.equal('John Doe')
                                            expect(user.username).to.be.equal('johndoe')
                                            expect(user.password).to.be.equal('1234')

                                            done()
                                        })
                                    })
                                })
                            }
                        }
                    })
                })
            } else
                createUser('John Doe', 'johndoe', '123123123', (error, userId) => {
                    expect(error).to.be.null

                    expect(userId).to.be.a('string')

                    const file = `./db/users/${userId}.json`

                    access(file, constants.F_OK, error => {
                        expect(error).to.be.null

                        readFile(file, 'utf8', (error, json) => {
                            expect(error).to.be.null

                            expect(json).to.be.a('string')

                            const user = JSON.parse(json)
                            expect(user.name).to.equal('John Doe')
                            expect(user.username).to.equal('johndoe')
                            expect(user.password).to.equal('123123123')

                            done()
                        })
                    })
                })

        })
    })
})