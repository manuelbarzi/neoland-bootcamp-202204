const { User, Item, Schedule } = require('../models')
const { NotFoundError } = require('../errors')
const { validateUsername, validateStringNotEmptyNoSpaces, validateStringNotEmptyOrBlank } = require('../validators')

function addProductToSchedule(userId, day, productId) {
    debugger
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

            
            const item = new Item({ product: productId, quantity: 1})
            
            if(day==='Lunes'){
                const index= schedule.monday.findIndex(element =>
                    element.product.toString() === productId
                ) 
                if (index > -1)
                schedule.monday[index].quantity ++
                
                else if (index=== -1)
                schedule.monday.push(item)

            }
            else if (day==='Martes') {
                const index= schedule.tuesday.findIndex(element=> element.productId=== productId) 
                if (index > -1)
                schedule.tuesday[index].quantity ++
                
                else if (index=== -1)
                schedule.tuesday.push(item)
            }

            else if (day==='Miércoles'){
                const index= schedule.wednesday.findIndex(element=> element.productId=== productId) 
                if (index > -1)
                schedule.wednesday[index].quantity ++
                
                else if (index=== -1)
                schedule.wednesday.push(item)
            }
            else if (day==='Jueves') {
                const index= schedule.thursday.findIndex(element=> element.productId=== productId) 
                if (index > -1)
                schedule.thursday[index].quantity ++
                
                else if (index=== -1)
                schedule.thursday.push(item)
            }
            else if (day==='Viernes') {
                const index= schedule.friday.findIndex(element=> element.productId=== productId) 
                if (index > -1)
                schedule.friday[index].quantity ++
                
                else if (index=== -1)
                schedule.friday.push(item)
            }
            else if (day==='Sábado') {
                const index= schedule.saturday.findIndex(element=> element.productId=== productId) 
                if (index > -1)
                schedule.saturday[index].quantity ++
                
                else if (index=== -1)
                schedule.saturday.push(item)
            }
            else if (day==='Domingo'){
                const index= schedule.sunday.findIndex(element=> element.productId=== productId) 
                if (index > -1)
                schedule.sunday[index].quantity ++
                
                else if (index=== -1)
                schedule.sunday.push(item)
            }

            return schedule.save()
                .then(()=> {
                    return 
                })
        })

}

module.exports = addProductToSchedule

