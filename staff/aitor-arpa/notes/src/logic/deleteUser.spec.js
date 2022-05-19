const deleteUser = require('./deleteUser')
const { readdir, unlink, writeFile } = require('fs')
const { expect } = require('chai')
const { User } = require('../models')
const { createId } = require('../utils')



describe('Delete User', () => {


    it('succeeds on existing user', done => {

        readdir(`./db/users`, (error, files) => { // leo todos los archivos que tengo
            if (error) return done(error)

            let count = 0, _error

            if (files.length) {
                files.forEach(file => {
                    unlink(`./db/users/${file}`, error => {  // voy eliminando los archivos de usuarios para limpiar
                        if (!_error) {

                            if (error) return done(_error = error)

                            count++

                            if (count == files.length) { // cuando he terminado de eliminar todos
                                churro() // ejecuto todo el churro
                            }
                        }
                    })
                })
            } else {      // si no habian usuarios
                churro()  // ejecuto todo el churro
            }
        })



        function churro() {
            const user = new User('pepito', 'pepi_22', '123456789') // creo usuario nuevo
            const json = JSON.stringify(user, null, 4) // lo paso a json
            const userId = createId()

            writeFile(`./db/users/${userId}.json`, json, error => { // escribo el nuevo archivo de mi usuario
                if (error) return done(error)   // si hay un error lo paro con done


                deleteUser(userId, (error, user) => { // uso la funcion para buscar el usuario que acabo de añadir
                    expect(error).to.be.null // no espero encontrar errores
                    expect(user).to.be.null // espero que no tenga usuarios

                    // Pongo un readdir y miro que no hay ningun arrchivo¿?  

                    done()
                })
            })
        }
    })
})

