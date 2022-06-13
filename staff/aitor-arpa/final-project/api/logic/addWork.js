const { Job , User} = require('../models')
const {  validateString, validateStringNotEmptyOrBlank } = require('../validators')

function addWork(adminId,title,description,addres,wokers)  {
    validateString('title')
    validateString('description')
    validateString('addres')
    validateStringNotEmptyOrBlank('title')
    validateStringNotEmptyOrBlank('description')
    validateStringNotEmptyOrBlank('addres')

    return User.findOne({ id: adminId })
    .then(userfind => {
        if (userfind.role != 'admin')
            throw new AuthError(`${adminId} conctat for you Manager`)
        return Job.create({ title, description, addres, wokers })
    })
        

}

module.exports = addWork