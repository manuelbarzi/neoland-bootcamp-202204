const { User } = require("../models");
const { NotFoundError } = require('../errors')


function deleteUser(id) {
    return User.findById(id)
        .then((user)=> {

            if(!user) {
                throw new NotFoundError (`user with id ${id} does not exist`)
            }

            //deleteOne ({id_:id})
            return User.removeById(id) //te devuelve cosas por eso ponemos un result vacio porque nos importa una mierda
        })
        .then((/*resultDeCreate*/) => {/* hago algo y devuelvo algo, si me interesa */}) // este then captura la respuesta del delete
        // pero esta vacio porque no nos interesa recivir ni devolver nada


}

module.exports = deleteUser