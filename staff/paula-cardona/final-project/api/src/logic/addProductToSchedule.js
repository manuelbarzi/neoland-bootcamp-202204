const { User, Item, Schedule } = require('../models')
const { NotFoundError } = require('../errors')
const { validateUsername, validateStringNotEmptyNoSpaces, validatePositiveInteger, validateStringNotEmptyOrBlank } = require('../validators')

function addProductToSchedule(userId, day, productId, quantity) {
    
    validateUsername(userId)
    validateStringNotEmptyOrBlank(day, 'day')
    validateStringNotEmptyNoSpaces(productId, 'product id')
    validatePositiveInteger(quantity, 'quantity')
    
    
    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Schedule.findOne({user: userId})
        })
        .then(schedule => {
            if (!schedule) throw new NotFoundError(`schedule from user ${userId} does not exist`)

            
            const item = new Item({ product: productId, quantity})
            
            if(day==='monday')
                schedule.monday.push(item)
            else if (day==='tuesday')
                schedule.tuesday.push(item)
            else if (day==='wednesday')
                schedule.wednesday.push(item)
            else if (day==='thursday')
                schedule.thursday.push(item)
            else if (day==='friday')
                schedule.friday.push(item)
            else if (day==='saturday')
                schedule.saturday.push(item)
            else if (day==='sunday')
                schedule.sunday.push(item)

            return schedule.save()
                .then(()=> {
                    return item.id
                })
        })

}

module.exports = addProductToSchedule

// 1) addProductToSchedule
//        when user already exists
//          when schedule and product already exists
//            succeds on correct data:
//      AssertionError: expected { Object () } to equal '62a5be0f94f8ab468a8bc74c'
//       at /Users/paulacardonatrigueros/neoland-bootcamp-202204/staff/paula-cardona/final-project/api/src/logic/addProductToSchedule.spec.js:51:56
//       at processTicksAndRejections (node:internal/process/task_queues:96:5)
