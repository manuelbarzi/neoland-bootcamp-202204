const { User, Activity } = require ('../models')
const { NotFoundError } = require ('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')


function retrieveUserActivities(userId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')

    return User.findById(userId)
        .then((user) => {
            if(!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Activity.find({ user: userId }).lean()       
        })
        .then((activities)=>{
            
            actvities.forEach(actvity => { 
                actvity.id = actvity._id.toString()
                
                delete actvity._id
                delete actvity.__v
                delete actvity.user
            })

            return activities
        })
        
}

module.exports = retrieveUserActivities