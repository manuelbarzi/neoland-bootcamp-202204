const { User } = require("../models");
const { NotFoundError, AuthError } = require('../errors')
const { validatePassword } = require("../validators");



function deleteUser(id, password) {
    validatePassword(password)

    return User.findById(id)
        .then((user)=> {

            if(!user) {
                throw new NotFoundError (`user with id ${id} does not exist`)
            }
            if(user.password!==password)
                throw new AuthError (`wrong credentials`)

            //deleteOne ({id_:id})
            return User.deleteOne({_id: id}) //te devuelve cosas por eso ponemos un result vacio porque nos importa una mierda
        })
        .then((/*resultDeCreate*/) => {/* hago algo y devuelvo algo, si me interesa */}) // este then captura la respuesta del delete
        // pero esta vacio porque no nos interesa recivir ni devolver nada


}

module.exports = deleteUser