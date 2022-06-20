const { User, Schedule } = require('../models')
const { NotFoundError } = require('../errors')
const { validateUsername, validateStringNotEmptyNoSpaces, validateStringNotEmptyOrBlank } = require('../validators')


function updateProductQuantityinSchedule(userId, day, productId) {
    validateUsername(userId)
    validateStringNotEmptyOrBlank(day, 'day')
    validateStringNotEmptyNoSpaces(productId, 'product id')
      
    
    return User.findById(userId)
    .then(user => {
        if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)
    
        return Schedule.findOne({user: userId})
    })
    .then(schedule => {    
        if (!schedule) throw new NotFoundError(`schedule from user ${userId} does not exist`)

        if(day==='monday') {
            
            const foundItem = schedule.monday.find(item => item.product.toString() === productId)

            if(foundItem != undefined) {
                    foundItem.quantity++
            }
        }
                
        else if (day==='tuesday') {
            const foundItem = schedule.tuesday.find(item => item.product.toString() === productId)

            if(foundItem != undefined) {
                if (foundItem.quantity >= 1)
                    foundItem.quantity++
            }
        }   
        
        else if (day==='wednesday'){
            const foundItem = schedule.wednesday.find(item => item.product.toString() === productId)

            if(foundItem != undefined) {
                if (foundItem.quantity >= 1)
                    foundItem.quantity++
            }
        } 
        else if (day==='thursday'){
            const foundItem = schedule.thursday.find(item => item.product.toString() === productId)

            if(foundItem != undefined) {
                if (foundItem.quantity >= 1)
                    foundItem.quantity++
            }
        } 
        else if (day==='friday'){
            const foundItem = schedule.friday.find(item => item.product.toString() === productId)
            
            if(foundItem != undefined) {
                if (foundItem.quantity >= 1)
                    foundItem.quantity++
            }
        } 
        else if (day==='saturday'){
            const foundItem = schedule.saturday.find(item => item.product.toString() === productId)

            if(foundItem != undefined) {
                if (foundItem.quantity >= 1)
                    foundItem.quantity++
            }
        } 
        else if (day==='sunday'){
            const foundItem = schedule.sunday.find(item => item.product.toString() === productId)

            if(foundItem != undefined) {
                if (foundItem.quantity >= 1)
                    foundItem.quantity++
            }
        } 

        return schedule.save()
    })
    .then(()=> { })
                
        
}

module.exports = updateProductQuantityinSchedule