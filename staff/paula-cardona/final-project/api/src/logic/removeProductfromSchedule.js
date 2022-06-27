const { User, Schedule } = require('../models')
const { NotFoundError } = require('../errors')
const { validateUsername, validateStringNotEmptyNoSpaces } = require('../validators')


function removeProductFromSchedule(userId, day, productId) {
    debugger
    validateUsername(userId)
    validateStringNotEmptyNoSpaces(day, 'day')
    validateStringNotEmptyNoSpaces(productId, 'productId')
      
    
    return User.findById(userId)
    .then(user => {
        if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)
    
        return Schedule.findOne({user: userId})
    })
    .then(schedule => {    
        if (!schedule) throw new NotFoundError(`schedule from user ${userId} does not exist`)

        if(day==='Lunes') {
            const foundItem = schedule.monday.find(item => item.product.toString() === productId)

            if(foundItem != undefined) {
                if (foundItem.quantity > 1)
                    foundItem.quantity--
                else {
                    index = schedule.monday.findIndex(item => item.product.toString() === productId)
                    schedule.monday.splice(index, 1)
                }
            }
        }
                
        else if (day==='Martes') {
            const foundItem = schedule.tuesday.find(item => item.product.toString() === productId)

            if(foundItem != undefined) {
                if (foundItem.quantity > 1)
                    foundItem.quantity--
                else {
                    index = schedule.tuesday.findIndex(item => item.product.toString() === productId)
                    schedule.tuesday.splice(index, 1)
                }
            }
        }   
        
        else if (day==='Miércoles'){
            const foundItem = schedule.wednesday.find(item => item.product.toString() === productId)

            if(foundItem != undefined) {
                if (foundItem.quantity > 1)
                    foundItem.quantity--
                else {
                    index = schedule.wednesday.findIndex(item => item.product.toString() === productId)
                    schedule.wednesday.splice(index, 1)
                }
            }
        } 
        else if (day==='Jueves'){
            const foundItem = schedule.thursday.find(item => item.product.toString() === productId)

            if(foundItem != undefined) {
                if (foundItem.quantity > 1)
                    foundItem.quantity--
                else {
                    index = schedule.thursday.findIndex(item => item.product.toString() === productId)
                    schedule.thursday.splice(index, 1)
                }
            }
        } 
        else if (day==='Viernes'){
            const foundItem = schedule.friday.find(item => item.product.toString() === productId)
            
            if(foundItem != undefined) {

                if (foundItem.quantity > 1)
                    foundItem.quantity--
                else {
                    index = schedule.friday.findIndex(item => item.product.toString() === productId)
                    schedule.friday.splice(index, 1)
                }
            }
        } 
        else if (day==='Sábado'){
            const foundItem = schedule.saturday.find(item => item.product.toString() === productId)

            if(foundItem != undefined) {
                if (foundItem.quantity > 1)
                    foundItem.quantity--
                else {
                    index = schedule.saturday.findIndex(item => item.product.toString() === productId)
                    schedule.saturday.splice(index, 1)
                }
            }
        } 
        else if (day==='Domingo'){
            const foundItem = schedule.sunday.find(item => item.product.toString() === productId)

            if(foundItem != undefined) {
                if (foundItem.quantity > 1)
                    foundItem.quantity--
                else {
                    index = schedule.sunday.findIndex(item => item.product.toString() === productId)
                    schedule.sunday.splice(index, 1)
                }
            }
        } 

        return schedule.save()
    })
    .then(()=> { })
                
        
}

module.exports = removeProductFromSchedule