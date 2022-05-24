const { User } = require("../models");
const { validateObjectId, validateObject } = require("../validators");


function updateUser(userId, updates) {
    //TODO validators
    // validateObjectId(userId, 'userId')
    validateObject(updates, 'updates')
    
    return User.updateOne({ id: userId }, { $set : updates})
        .then(result => {debugger; console.log(result)})
        .catch(error => {
            if (error) throw error
        })
}

module.exports = updateUser