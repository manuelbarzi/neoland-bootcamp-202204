const { Job , User} = require('../models')
const { validateString, validateStringNotEmptyOrBlank } = require('validator')
const { AuthError } = require('errors')

function addJob(adminId,title,description,address,wokers)  {
    validateString('title')
    validateString('description')
    validateString('addres')
    validateStringNotEmptyOrBlank('title')
    validateStringNotEmptyOrBlank('description')
    validateStringNotEmptyOrBlank('addres')

    return User.findOne({ _id: adminId })
    .then(userfind => {
        debugger
        if (userfind.role === 'worker'|| userfind === undefined)
            throw new AuthError(`conctat for you Manager`)
        return Job.create({ title, description, address, wokers })
    })
    .then(job => {
        return job
    })
    .catch(error =>{
        return error
    })

        

}

module.exports = addJob