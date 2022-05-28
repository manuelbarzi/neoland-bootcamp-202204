const { User } = require("../models");
const { NotFoundError } = require('../errors')
const { validatePassword } = require("../validators");



function deleteUser(id, password) {
    validatePassword(password)

    return User.findById(id)
        .then((user)=> {

            if(!user) {
                throw new NotFoundError (`wrong credentials`)
            }
            if(user.password!==password)
                throw new NotFoundError (`wrong credentials`)

            //deleteOne ({id_:id})
            return User.deleteOne({_id: id}) //te devuelve cosas por eso ponemos un result vacio porque nos importa una mierda
        })
        .then((/*resultDeCreate*/) => {/* hago algo y devuelvo algo, si me interesa */}) // este then captura la respuesta del delete
        // pero esta vacio porque no nos interesa recivir ni devolver nada


}

module.exports = deleteUser