const { Job, User } = require('../models')
const { validateString, validateStringNotEmptyOrBlank } = require('validator')
const { AuthError, NotFoundError, ConflictError } = require('errors')


function addJob(adminId, title, description, address, workers) {
    validateString('title')
    validateString('description')
    validateString('addres')
    validateStringNotEmptyOrBlank('title')
    validateStringNotEmptyOrBlank('description')
    validateStringNotEmptyOrBlank('addres')

        return (async () => {
            try {
                const user = await User.findById(adminId)

                if (user.role === 'worker' || user === undefined)
                    throw new AuthError(`${adminId}you do not have allow for that request`)

                workers.forEach(async(worker) => {
                    try {
                        const user = await User.findById(worker)
                        if(!user) throw new NotFoundError(`user with id ${worker} no found`)
                    } catch(error){
                        throw new NotFoundError(error)
                    }
                })

                const job = new Job({ title, description, address, workers })

                const result = await job.save()
                return result
            } catch (error) {
                throw new ConflictError(error)
            }
        })()

}

module.exports = addJob