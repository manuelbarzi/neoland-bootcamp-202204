const { User } = require("../models");
const { NotFoundError, AuthError } = require('../errors')
const { validatePassword } = require("../validators")

function deleteUser(id, password) {
    validatePassword(password)

    return User.findById(id)
        .then((user)=> {

            if(!user) {
                throw new NotFoundError (`user with id ${id} does not exist`)
            }
            if(user.password!==password)
                throw new AuthError (`wrong credentials`)

            return User.deleteOne({_id: id}) 
        })
        .then(() => { }) 
}

module.exports = deleteUser