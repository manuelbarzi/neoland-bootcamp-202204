const { User } = require('../models')
const { ConflictError, AuthError } = require('../errors')
const { validateUsername, validatePassword, validateEmail, validateString } = require('../validators')


function createUser(adminId, name, username, password, role, nid, email, date) {
    validateString(name)
    validateUsername(username)
    validatePassword(password)
    validateString(nid)
    validateEmail(email)
    validateString(role)

    return User.findOne({ _id: adminId }).lean() // solo trae el documento sin modelo
        .then(userfind => {        
            if (userfind.role != 'admin')
                throw new AuthError(`${username} conctat for you Manager`)
            return fo = User.create({ name, username, password, role, nid, email, date }) 
        })
      
        .catch(error => {
         if (error.code === 11000) 
            return new ConflictError('Username or email duplicate ')
         
       }) 




}

module.exports = createUser