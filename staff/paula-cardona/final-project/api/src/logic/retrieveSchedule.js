const { User, Schedule } = require ('../models')
const { NotFoundError } = require ('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')


function retrieveSchedule(userId) { // recivimos el user id al que les buscaremos sus notas 
    validateStringNotEmptyNoSpaces(userId, 'user id')

    return User.findById(userId)

        .then(user => {
            if(!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Schedule.findOne({user: userId})    
        })
        .then(schedule => {
            if (!schedule) throw new NotFoundError(`schedule from user ${userId} does not exist`)

            schedule.id = schedule._id.toString()

            delete schedule._id
            delete schedule._v
                
                

            return schedule
        })
        
}


module.exports = retrieveSchedule
